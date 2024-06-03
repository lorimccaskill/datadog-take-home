# Carousel feature

## Choosing Glide.js

When building out the carousel, I wanted to find a lightweight and straightforward approach to adding this functionality to the site. I typed "vanilla javascript image carousel" into Google search and among the top results (mostly how-to articles) I found [Glide.js](https://glidejs.com/). The library's callout of using ES6 and [clear documentation](https://glidejs.com/docs/) won me over. When researching a bit further I discovered Alpine [also uses Glide.js](https://alpinejs.dev/component/glide), albeit in a component requiring a purchase to access.

## Development Notes (remaining TODO's)

1. Hide controller when not functional
- I used Glide's `rewind: false` option to prevent the slider from looping and keep the interaction linear.
- As a result, when the first slide is in view, clicking "prev" does nothing, same for "next" upon viewing the last slide.
- I'd write JS to hide each of the controls in the respective scenarios above, and then show them when they're functional again.
2. Finish implementing the design of the controllers as seen in the spec
- Use the SVG arrow provided instead of text.
- Position the controller vertically and as a mask that covers the text area but allows for the next image to peek through on the right. (I'd likely use absolute positioning as part of achieving this effect.)
3. Image peeking
- Glide.js positions the slides outside of view by default, so I'd first explore if there's a setting I can adjust to get the effect of having the next slide peek into view.
- CSS changes to either the parent element or slide components themselves could be successful, too, either in combination with a setting change or as an entirely contained solution.
- I'd also need to think through how the last slide looks. I don't think a corresponding preview on the left would make sense (it would shift the content in an awkward and abrupt way). It's likely the need for a preview will have passed because the user already discovered the component's functionality by interacting with it.
4. Get uniformly sized screenshots.
- if this doesn't resolve some of the layout inconsistencies between slides one and two (mainly the space between the image and "prev" and "next" controllers below), look into CSS solutions.
5. HTML refactor
- I'd explore if using `<figure>` and `<figcaption>` would be an improvement semantically, or perhaps `<article>`.
6. Add more content!
- For slide two the partial screenshot provided me with the notion of highlighting the dashboards Datadog provides users. A quick search lead me to [this feature overview](https://www.datadoghq.com/dashboards/elb-dashboard/) from which I took a screenshot for the image and some text for the headline. I'd look to build out at least 5 slides with content in a similar manner to get the full effect of interacting with the component.