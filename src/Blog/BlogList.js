import React, { Fragment } from "react";
import { route } from "navi";

import { getEntries } from "./blog-helpers";
const entries = getEntries();

function Entry(props) {
  return <li>{props.entry}</li>;
}

function BlogList() {
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

export default route({
  getView: BlogList
});
