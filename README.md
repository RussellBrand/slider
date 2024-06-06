# Slider

## About

Slider is a parralex-focused image carousel written without libraries in pure javascript and css based in part on [@Hyperplexed's video](https://www.youtube.com/watch?v=PkADl0HubMY)

Unlike the Hyperplexed system, `Slider`, has parralex in both dimensions.

The images use are made with Dall-E via a CustomGPTthat I created

[diverse-image-creator](https://chatgpt.com/g/g-pOP5JGs63-diverse-image-creator)

Slider also demonstrates [Deno Deploy](https://deno.com/deploy).

## Live System

The system is live at [https://happy-rat-60.deno.dev/](https://happy-rat-60.deno.dev/)


## Installation

`$ clone git@github.com:RussellBrand/slider.git`

## Use

### Local use

For local use, you can simply visit the index page in you browser

`public/index.html`

You can serve the files locally with a static http server, for example, with deno,

`$ deno run --allow-net main.ts`

which can be invoked from make

`$ make demo`

You can use your own image files and update the `index.html` file.

### Deployment

I have disabled auto deployment on github until I setup a deployment branch.

Deployment can be done manually with

`$ make deploy`

which invokes

`$ deployctl deploy`

you need to manually update `makefile` with the new version information

#### Release

use the `--prod` flag to make a release

`$ make release`

## License

GNU General Public License (GPL) is version 3

## TODO

### normalize deployment


1. convert to standard static file service methodology for deno deploy
2. create a deployment branch
3. enable auto deployment from that branch

### add animated sample to the readme

There is a 10meg limit unless we use external hosting


### home page

Add titles, explanations, and links to the repository.

### show commentary

Displayed the prompts that were used to create the images.

### data files

The datafiles should be in their own directory.

They should be "discovered" rather than being hard coded in `index.html`

### excess file removal

The repository contains several files unrelated to this project they should removed.

### code cleanup

The source code contains a lot of instrumentation and debugging code that has been commented out and should be removed.

### cleanup makefile

The makefile has the release and deployment information hardcoded in it.

Instead this should come from a configuration file and be updated by the `deployctl` system

### find or build CSS support tools and/or methodologies

As a separate project, I should find or develop methologies and or tools to deal with the problems listed in lessons learned.

## Lessons Learned

### Lack of css development support

While this is a tiny amount of code, CSS related typos made the development much more difficult than it should be.

Essentially all of my development time was spent tracking down CSS related typos.

#### 1. VSCODE does not natively have any support for CSS

#### 2. Limititions to LintStyle

The generally recommended support for CSS especially in VSCODE is `Lintstyle`.

Unfortunately, Lintstyle is not a validator.

When I re-introduced my problem causing CSS typos, it caught none of them.

#### 4. CSSTree validator was much better

In contrast `CSSTree validator` caught all of the CSS typos in the css file.

#### 5. Half of the CSS related typos were in generated strings

For example, while generating one line

```
track.style.transform = `translate(${nextPercentage}%, -50%)`;
```

I had five separate typos. None of the CSS validator or linters that I eventually found would have been able to look into this string.

### Lack of Div Data Storage support

None of the tools that I found track the div data variables, so when my `index.html` had

```
 <div id="track" data-mouse-down-at="0" data-prev-percentage="0">
```

but my javascript had

```
track.data.previous-percentage
```

rather than

```
track.data.prev-percentage
```

it was not detected

## Testing

No tests were developed for this system.

A very basic test would look something like pupeteer test outline below.

This minimal test is _much_ larger than my entire system and does ery little.

To be useful, I might to calculate the expected motions (right answers) which would be more work than developping the entire system was, would be a brittle test and would not at all capture the behavior in terms of either TDD or BDD.

I estimate that designing and developping reasonable, non-brittle, testing would be 20x more effort than the actual development.

### pupeteer test outline

```
const puppeteer = require('puppeteer');

describe('Image Movement on Mouse Movement', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000'); // Change this to the URL of your app
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should move the image in response to mouse movement', async () => {
your image)
    const imageSelector = '#movingImage';

    const initialPosition = await page.evaluate((selector) => {
      const image = document.querySelector(selector);
      const rect = image.getBoundingClientRect();
      return { x: rect.left, y: rect.top };
    }, imageSelector);


    await page.mouse.move(100, 100); // Move to some position
    await page.mouse.move(200, 200); // Move to another position


    const newPosition = await page.evaluate((selector) => {
      const image = document.querySelector(selector);
      const rect = image.getBoundingClientRect();
      return { x: rect.left, y: rect.top };
    }, imageSelector);


    expect(newPosition).not.toEqual(initialPosition);
  });
});
```


