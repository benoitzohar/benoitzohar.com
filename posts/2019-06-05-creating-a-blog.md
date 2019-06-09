# Creating a static blog

## Evaluating options

- tried [navi](https://frontarm.com/navi/en): 260kb of js not gzipped
- tried [nextjs](https://github.com/zeit/next.js): 350kb of js not gzipped
- tried [gatsby](https://www.gatsbyjs.org): 330kb of js not gzipped

- trying 11ty: it's good but I really want

## Re-evaluating my needs

Trying all of these frameworks and libraires, I noticed something. My blog will be truly static, I don't need a javascript framework.

The thing is that I do like to write reusable code with JSX. All I need is to find a tool that lets me:

- render JSX code in a file
- minify it
- hande the css generation (Sass or style-components, I will decide later)
- preload the next pages actual pages: if I don't have any javascript code on my pages, I don't need a Single Page App, I can just preload the next pages.
