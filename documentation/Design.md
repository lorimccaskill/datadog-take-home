# Design Decisions

I love receiving specs from designers and getting their expert opinion when I'm building sites. (_And I did miss having their input this time!_) 

Here’s my thinking on some of the design decisions I made independently for this project. I also include notes on what I’d like to improve upon.

## Mobile Navigation



## Headline content

In this section I did my best to adapt elements on the page to changing screen sizes.

It’s common to stack elements vertically when they no longer fit side-by-side horizontally, and I used that approach throughout the site. With the headline content, the desktop layout shown in the design – even at smaller font sizes – took up a lot of vertical space. To avoid the headline content overwhelming the available space at screen sizes large and smaller, I used a grid to arrange the `<h1>`, `<h2>`, and `<a>` elements in a couple of configurations. The goal was to minimize vertical height so the user could always see the pricing tier section (and know there's more to read) while still maintaining the visual prominence of the headline text and call to action (aka “Try Free” link).

The following screenshots illustrate the underlying grid for each breakpoint.

### Extra-large screens (using block display)
![screenshot of headline at extra-large screen size](/documentation/screenshots/headline-XL.png)

### Large screens (3-column grid)
![screenshot of headline at large screen size](/documentation/screenshots/headline-LG.png)

### Medium screens (4-column grid)
![screenshot of headline at medium screen size](/documentation/screenshots/headline-MD.png)

### Small screens (4-column grid)
![screenshot of headline at small screen size](/documentation/screenshots/headline-SM.png)

### Extra-small screens (4-column grid)
![screenshot of headline at extra small screen size](/documentation/screenshots/headline-XS.png)

One improvement I'd make is refining the typography more. Adjustments in leading and perhaps more customized font sizes would be good refinements.

## Customer section

The swapping of company logo squares as the user clicks through to see each testimonial works seamlessly without layout disruptions. However, the logo treatments themselves aren't in what I'd think of as a finished state.

Anything but the AdRoll logo disappears on the testimonial background. (Below WholeFoods is shown)

![screenshot of grid of customer logo square with larger testimonal square](/documentation/screenshots/customers-component-swapped.png)

I'd improve this by either:
- handling for two versions of a logo (one knockout -- all white -- for the clickable square; one full color, like the AdRoll logo, to be shown on the light gray testimonial background)
- update the background and text color of the testimonial section to match the clickable square appearance

When chosing my approach I'd consider any added complexity in both browser rendering as well as code maintenance.