import React from "react";
import { useRouteData } from "react-static";
import { Link } from "@reach/router";

import Meta from "../components/Meta";

function displayDate(dateStr) {
  return new Date(dateStr).toLocaleDateString();
}

export default function Blog() {
  const { posts } = useRouteData();
  return (
    <div className="blog">
      <Meta />
      <h2>I wrote about how I created this site:</h2>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={`/blog/post/${post.slug}/`}>
              <section>
                <header>{post.title}</header>
                <time>{displayDate(post.date)}</time>
                <summary>{post.description}</summary>
              </section>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
