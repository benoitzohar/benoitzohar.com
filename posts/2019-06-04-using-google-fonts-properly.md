# Using Google Fonts properly

> How and why I have chosen to use Google Fonts.

## What happened to variable fonts?

In [this post](https://benoitzohar.com/blog/post/intro) I wrote that I wanted to experiment with variable fonts. After looking online for a good open source variable font, I found the one I wanted to use on my website: Source Sans.

The problem is that I couldn't find a light variable version of `Source Sans` in `woff2`, so the entire loaded font weighted `123kb`. Compared to 2 non-variable font files in `woff2`, which weight `26kb` combined, and since I'm only using 2 `font-weight`s: 300 and 400 so far. Using non-variable fonts seems to be the way to go.

## To host or not to host (the custom fonts)

The answer to this question is not binary. But in our case, taking advantage of a CDN for our fonts has multiple advantages:

- we don't have to optimize the fonts for each browser
- there's a good chance that the font file is already **cached** by the user's browser, which will reduce the load time.

That is why I decided to use the [Google Fonts CDN](https://developers.google.com/fonts/docs/getting_started) to import `Source Sans Pro` into my website.

The CDN already supports [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) and uses [gzip](https://www.gzip.org/) so we don't have to handle that.

## FOUT or FOIT?

`FOUT` stands for `Flash of Unstyled Text`. It describes the effect you have before your custom font is loaded and the browser display your text content with the first available font in your `font-family` declaration.

`FOIT` stands for `Flash of Invisible Text`. This strategy hides the text completely before the custom font is loaded.

Based on your preference, you can use `font-display: block;` to have `FOIT` or `font-display: swap;` to have `FOUT`.

The [font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) css property needs to be set when declaring the `@font-face`. Which would be annoying for our choice of using Google Fonts, because the `@font-face` is provided by the CDN.

The good news is that Google Fonts [recently allowed us](https://css-tricks.com/google-fonts-is-adding-font-display/) to specify a custom `font-display` in the css URL.

By importing:

```html
<link
  href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400&display=swap"
  rel="stylesheet"
/>
```

we are now able to force `FOUT` with a local font that matches the best our custom font.

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

Before **without preconnect**:
![Screenshot showing the DNS lookup, TLS negotiation and TCP handshake begin made ahead of time](https://i.ibb.co/YZ1npJV/Screenshot-2019-06-05-00-05-14.png)

After **with preconnect**:
![Screenshot showing the DNS lookup, TLS negotiation and TCP handshake begin made ahead of time](https://i.ibb.co/DpnKHMw/Screenshot-2019-06-04-23-58-39.png)

## Notes about react-snap

While trying to optimize the way the Google Fonts were loaded I noticed that, in production, I had no calls to https://fonts.googleapis.com/ and the 2 fonts downloaded were `.ttf` files which weighted each around `21kb` (!).
The reason for that is `react-snap` and `inlineCSS: true`. Since `react-snap` downloaded all the css files for me in order to inline them, and since it's chrome doesn't seem to have the "latest" headers for font files, Google Fonts was loading `.ttf` files as fallback.

I removed `inlineCSS: true` from the `react-snap` configuration and now the font files loaded are `woff2` files, which are around `13kb` each.

While inlining the css file from Google Fonts speeds up the page load, it does not load the most optimized font file type for the current client.

## Notes about unicode-range subsetting

If you look into a Google Fonts generated css, you'll see that every subset is there. The file is actually ready for all non-latin languages.
Since I my website will only contain latin characters I don't need other subset.
Google Fonts doesn't support adding `&subset=latin` in their api URL for [browsers which supports unicode-range subsetting](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization), which is now pretty [well supported](https://caniuse.com/#search=unicode-range):

![Screenshot of supported browsers for unicode-range](https://i.ibb.co/9cPdwdL/Screenshot-2019-06-04-23-55-27.png)

The browser actually use this line to figure out what font it should load or not:

```css
unicode-range: U+1F00-1FFF;
```

While I wanted to optimize every bit of the css that is loaded onto my website, being able to use cached fonts still makes using Google Fonts the better option for me, for now.

---

The code for the changes I'm mentioning in this post is available on Github in [this Pull Request](https://github.com/benoitzohar/benoitzohar.com/pull/2).

## Resources

- https://font-display.glitch.me
- https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf
- https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization#preload_your_webfont_resources
