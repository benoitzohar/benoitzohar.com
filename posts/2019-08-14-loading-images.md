# Loading images properly

> Images are the most amount of data sent on internet, let's see how we can make it a little bit better.

Now that my blog is up and running, I can focus on the main performance issue: loading images.

My temporary solution regarding images was to upload them to [imgbb](https://imgbb.com/) and simply insert the url into my markdown files as plain images. 

Doing that has **multiple disadvantages**:
 - All images are loaded when the page is loaded;
 - I uploaded raw screenshots from MacOS, hence everything was a `.png`, where another format would be more effective in terms of file size;
 - All images are loaded in full size, no matter the screen size.

Ok, so how can we make this better? 👇

## Use an image CDN

## Implement lazy loading

## Use responsive images

