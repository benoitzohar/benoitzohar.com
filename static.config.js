import path from "path";
import { readFileSync } from "fs";
import glob from "glob";

export default {
  getRoutes: async () => {
    const files = glob.sync("./posts/*.md");

    const posts = files.reverse().map(filepath => {
      const filename = path.basename(filepath);
      const date = new Date(filename.substr(0, 10));
      const slug = filename.substr(11).replace(".md", "");
      const content = String(readFileSync(filepath)) || "";
      const title = content.split("\n")[0].replace("# ", "");

      return {
        slug,
        date,
        title,
        content
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
