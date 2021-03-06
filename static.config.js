import path from "path";
import { readFileSync } from "fs";
import glob from "glob";
import cloudinary from "cloudinary-core";

const URL =
  process.env.CONTEXT === "production"
    ? process.env.URL
    : process.env.DEPLOY_URL;

const cl = new cloudinary.Cloudinary({
  cloud_name: "benoitzohar",
  secure: true
});

function replaceImages(content) {
  return content.replace(/(?:!\[(.*?)\]\((.*?)\))/gim, function replacer(
    _,
    title,
    filename
  ) {
    // this will fallback gracefully if the filename is actually an image URL
    const url = cl.url(filename, {
      fetchFormat: "auto",
      width: "IMG_WIDTH",
      crop: "pad"
    });
    return `![${title}](${url})`;
  });
}

export default {
  siteRoot: URL,
  getRoutes: async () => {
    const files = glob.sync("./posts/*.md");

    const posts = files.reverse().map(filepath => {
      const filename = path.basename(filepath);
      const date = new Date(filename.substr(0, 10));
      const slug = filename.substr(11).replace(".md", "");
      const content = replaceImages(String(readFileSync(filepath)) || "");
      const rows = content.split("\n");
      const title = rows.find(row => row.startsWith("# ")).replace("# ", "");
      const description = rows
        .find(row => row.startsWith("> "))
        .replace("> ", "");
      const url = `${URL}/blog/post/${slug}`;

      return {
        slug,
        date,
        title,
        description,
        content,
        url
      };
    });

    return [
      {
        path: "/blog",
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.slug}`,
          template: "src/containers/Post",
          getData: () => ({
            post
          })
        }))
      }
    ];
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap")
  ]
};
