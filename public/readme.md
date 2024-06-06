https://github.com/sw33ws/Camille-Moral-Website-Recreation

~/xall/programming/slider/Camille-Moral-Website-Recreation/

You can get the width of the image-tracker div using the offsetWidth property in JavaScript. Here's how you can do it:

```

const imageTracker = document.getElementById('image-tracker');
const width = imageTracker.offsetWidth;

```

;
This will give you the width of the image-tracker div in pixels, including padding and border (but not the margin). If you want to get the width without padding or border, you can use clientWidth instead of offsetWidth.

You can find the total width of these images by looping through them and summing up their widths. Here's how you can do it in JavaScript:

```
let totalWidth = 0;
const images = document.getElementsByTagName('img');

for(let i = 0; i < images.length; i++) {
  totalWidth += images[i].offsetWidth;
}

console.log(totalWidth);
```

;
This code gets all the img elements in the document, loops through them, and adds up their widths. The total width is then logged to the console.

Please note that this will only work correctly if the images have finished loading when this code runs, because the browser doesn't know the dimensions of an image until it's loaded. You might need to put this code in a window.onload event handler to ensure it runs after all images have loaded.
