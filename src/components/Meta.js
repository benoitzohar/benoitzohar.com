import React from "react";
import { Head } from "react-static";

const me = "Benoit Zohar";

export default function Meta({ description, publishedAt, title, url }) {
  return (
    <Head>
      <title>{title ? `${title} | ${me}` : me}</title>
      {description && <meta name="description" content={description} />}
      {title && <meta property="article:author" content={me} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:site_name" content={me} />
      {title && <meta property="og:type" content="article" />}
      {title && <meta property="og:title" content={title} />}
      {publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {url && <meta property="og:url" content={url} />}
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400&display=swap"
        rel="stylesheet"
      />
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
  );
}
