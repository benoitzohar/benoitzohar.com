# Using Google Fonts properly

## What happened to variable fonts?

In [this post](https://benoitzohar.com/blog/TODO) I wrote that I wanted to experiment with variable fonts. After looking online for a good open source variable font, I found the one I wanted to use on my website: Source Sans

## To host or not to host

## FOUT or FOIT?

## Preconnect

Having dynamic fonts loaded specifically for the client is great but it comes with a cost: a DNS lookup, a TLS negotiation and a TCP handshake. We can use `preconnect` to anticipate the need for those.

At first I tried to add `dns-prefetch` **and** `preconnect` to the domain `fonts.gstatic.com`. I realized that `dns-prefetch` was not needed in my case since `preconnect` also does the lookup.

`dns-prefetch` performs a DNS lookup ahead of time.  
`preconnect` performs DNS lookups, TLS negotiations and TCP handshakes before the HTTP request is made.

This is the code I added in `<head>` :

```html
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
```

This allows my fonts to be loaded faster since the entire connection to the server is done as soon as the `<head>` is parsed.

The code for the changes I'm mentioning in this post is available on Github in [this Pull Request](https://github.com/benoitzohar/benoitzohar.com/pull/2).

## Notes about react-snap

While trying to optimize the way the google fonts were loaded I noticed that, in production, I had no calls to https://fonts.googleapis.com/ and the 2 fonts downloaded were `.ttf` files which weighted each around 20kb (!).
The reason for that is `react-snap` and `inlineCSS: true`. Since `react-snap` downloaded all the css files for me in order to inline them, and since it's chrome doesn't seem to have the "latest" headers for font files, Google fonts was loading `.ttf` files as fallback.

I removed `inlineCSS: true` from the `react-snap` configuration and now the font files loaded are `woff2` files, which are around `13kb` each.

While inlining the css file from google fonts speeds up the page load, it does not load the most optimized font file type for the current client.

## Resources

https://font-display.glitch.me/
https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf
https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization#preload_your_webfont_resources
