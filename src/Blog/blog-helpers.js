export function getEntries() {
  const entries = (process.env.REACT_APP_BLOG_ENTRIES || "").split(",");
  return entries;
}
