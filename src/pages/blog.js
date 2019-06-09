import React from "react";
import { useRouteData } from "react-static";
import { Link } from "@reach/router";

export default function Blog() {
  const { posts } = useRouteData();
  return (
    <div>
      All Posts:
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={`/blog/post/${post.slug}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
