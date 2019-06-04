const fs = require("fs");
const path = require("path");

process.env.REACT_APP_BLOG_ENTRIES = fs
  .readdirSync(path.resolve(__dirname, "../blog"))
  .join(",");
