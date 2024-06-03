# Debugging notes
## Using Tailwind CSS within an Astro project

When adding Tailwind CSS to my Astro project I encountered a couple of hurdles.

I first installed Tailwind using the [CLI instrutions](https://tailwindcss.com/docs/installation). But after doing so I noticed two issues:
1. My IDE (VS code) was't auto-completing Tailwind classes as I typed within `.astro` files
2. Adding a Tailwind class (`bg-purple-700`) not part of the default CSS build (i.e. styles the directives in `input.CSS` provide) wasn't working with my HTML withint `.astro` files.

Taking to Google, I read through these sources...
  - https://tailwindcss.com/docs/guides/astro
  - https://docs.astro.build/en/guides/integrations-guide/tailwind/
  - https://codedamn.com/news/frontend/how-to-fix-color-not-working-in-tailwind-css

and discovered that I needed to follow framework specific installation instructions. Using the guide on [Astro's site](https://docs.astro.build/en/guides/integrations-guide/tailwind/) nearly got me there, but it still wasn't working. 

Then I found my solution:
- https://dev.to/dailydevtips1/how-to-use-tailwind-css-in-astro-1fnd

I needed to enable the JIT compiler and also specify to Tailwind which files to purge.

`tailwind.config.js` before my changes:
```
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

`tailwind.config.js` after my changes:
```
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'purple': '#724EEF',
    },
    fontFamily: {},
    extend: {},
  },
  plugins: [],
}

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
};
```

## Implementing custom colors
- issue: purple override, then custom purple color (`datadogPurple`) not working
- research
  - https://community.redwoodjs.com/t/tailwind-custom-theme-not-working/3695

`tailwind.config.js` after my changes:
```
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [],
}

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'datadogPurple' : '#724EEF',
        'datadogGreen': '#14D071',
        'datadogOrange' : '#FF635A',
      },
      fontFamily: {
        'sans': ['Natural', 'sans-serif'],
      },
    },
  },
};
```

Moving the theme settings from the default export to module.exports resolved my issue.