import React, { Fragment } from "react";
import { useRouteData } from "react-static";
import ReactMarkdown from "react-markdown";

import Meta from "../components/Meta";

export default function Post() {
  const { post } = useRouteData();

  return (
    <Fragment>
      <Meta
        title={post.title}
        description={post.description}
        publishedAt={post.date}
        url={document && document.location.href}
      />
      <article className="post">
        <ReactMarkdown source={post.content} />
      </article>
    </Fragment>
  );
}
