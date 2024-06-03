# Customer section

When building out the Customers component (shown below), I had the idea to make the company logos clickable and swap in a related testimonial, in part because I noticed the AdRoll tesmtimonial didn't have a corresponding logo square.

![screenshot of grid of customer logo square with larger testimonal square](/documentation/screenshots/customers-component.png)

I began learning about these Alpine Directives, but each had shortcomings related to my concept:

1. [x-model](https://alpinejs.dev/directives/model) allows for binding data... but it only works with `<input>` elements (I would have to really manipulate the purpose and look to achieve the clickable square approach the design presented) and it didn't provide me with a way to show / hide the company that's been swapped in.
2. [x-ref](https://alpinejs.dev/directives/ref) allows access to the DOM, but I wanted to pass in structured variable data (not simply a string) in order to update the contents of the HTML that creates the Testimonial Highlight.
3. [x-teleport](https://alpinejs.dev/directives/teleport) felt closer to a workable option, but the biggest downside would seem to be it's reliance on leveaging full markup in the `<template>` element. As I thought through this possibility, I was heading down a road in which all of the testmimonials would exist in the DOM and be hidden. And while I could create them in Astro with components, I wanted to avoid littering the output HTML if possible.

Ultimately I went with using the global Alpine.data() to register and call a custom function, handleCustomerClick() which both updates the testimonal content and swaps the clickable company logo so the user can select any of the testimonials to view. This code excerpted below is found in [CustomerSection.astro](../src/components/CustomerSection.astro):

```
document.addEventListener('alpine:init', () => {
        Alpine.data('customers', () => ({ 
            handleCustomerClick() {
                /*
                    set up constants used to swap data in two places:
                    - Testimonial Highlight (callout quote from customer)
                    - Customer List (selectable customer logo)

                    at the start, Testimonial Highlight displays the company we'll refer to as the swap
                    and the selected element in the Customer List is the company we'll refer to as chosen
                */
                
                const chosenElement = this.$el; // identify chosenCompany via clicked element's ID
                const chosenCompany = chosenElement.id;
                const chosenCompanyLogo = chosenElement.getElementsByTagName('img')[0].cloneNode(true); // get a copy of <img> so the logo isn't lost in the Customer List
                const swapCompany = document.getElementById('customer-testimony-company').innerText;
                const swapElement = document.getElementById(swapCompany);

                /* 
                    update the Testimonials Highlight with chosen company testimony
                    chosen company text data pulled from testimonials object data
                    chosen company logo <img> element pulled via copy of <img> node in chosenElement
                */
                document.getElementById('customer-testimony-company').innerText = chosenCompany;
                document.getElementById('customer-testimony-logo').replaceChildren(chosenCompanyLogo);
                document.getElementById('customer-testimony-quote').innerText = testimonials[chosenCompany].quote;
                document.getElementById('customer-testimony-name').innerText = testimonials[chosenCompany].name;
                document.getElementById('customer-testimony-title').innerText = testimonials[chosenCompany].title;

                /* 
                    update the Customer List with the swap company
                    while also retaining the chosen company (via a copy, i.e. cloneNode) in the Customer List (will be inserted as the first <li> and CSS will hide the element)
                */

                const chosenCopy = chosenElement.cloneNode(true);
                document.getElementById('customers-list').prepend(chosenCopy); // add chosen company as first item (hidden) in Customer List

                chosenElement.replaceWith(swapElement); // swap company placed where user clicked
            }
        }))
    })
```

Side note: now that I have my working solution that does leverage `getElementById` in several parts of handleCustomerClick(), I'd like to explore if there's a way for me to refactor / reconceive of this functionality and use `x-ref` in part of the approach.