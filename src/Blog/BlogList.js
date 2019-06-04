import React, { Fragment } from "react";

import { getEntries } from "./blog-helpers";
const entries = getEntries();

function Entry(props) {
  return <li>{props.entry}</li>;
}

export default function BlogList() {
  return (
    <Fragment>
      Blog
      <ul>
        {entries.map(entry => (
          <Entry entry={entry} />
        ))}
      </ul>
    </Fragment>
  );
}
