import React from "react";
import { useRouteData } from "react-static";
import ReactMarkdown from "react-markdown";
//
import { Link } from "@reach/router";

export default function Post() {
  const { post } = useRouteData();

  return (
    <div>
      <Link to="/blog/">{"<"} Back</Link>
      <br />
      <ReactMarkdown source={post.content} />
    </div>
  );
}
