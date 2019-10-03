import React, { Fragment } from "react";
import { useRouteData } from "react-static";
import ReactMarkdown from "react-markdown";

import Meta from "../components/Meta";

const MAX_DESKTOP_IMAGE_WIDTH = 732 * 2;
const MAX_MOBILE_IMAGE_WIDTH = 348 * 2;

function Image(props) {
  const urlFull = props.src.replace("IMG_WIDTH", MAX_DESKTOP_IMAGE_WIDTH);
  const urlSmall = props.src.replace("IMG_WIDTH", MAX_MOBILE_IMAGE_WIDTH);

  return (
    <picture>
      <source srcset={urlFull} media="(min-width: 420px)" alt={props.alt} />
      <img src={urlSmall} alt={props.alt} />
    </picture>
  );
}

export default function Post() {
  const { post } = useRouteData();

  return (
    <Fragment>
      <Meta
        title={post.title}
        description={post.description}
        publishedAt={post.date}
        url={post.url}
      />
      <article className="post">
        <ReactMarkdown source={post.content} renderers={{ image: Image }} />
      </article>
    </Fragment>
  );
}
