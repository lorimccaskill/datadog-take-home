# Datadog Take Home Assignment

## Debugging notes
### Using Tailwind CSS within an Astro project
- issue one: VS code not auto-completing Tailwind class within .astro files
- issue two: Tailwind class (bg-purple-700) applied to HTML within .astro file doesn't apply Tailwind CSS
- research
  - https://tailwindcss.com/docs/installation
  - https://tailwindcss.com/docs/guides/astro
  - https://docs.astro.build/en/guides/integrations-guide/tailwind/
  - https://codedamn.com/news/frontend/how-to-fix-color-not-working-in-tailwind-css
  - https://dev.to/dailydevtips1/how-to-use-tailwind-css-in-astro-1fnd (fix! file purge & JIT compiler)