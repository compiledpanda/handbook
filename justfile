init:
  npm ci

build:
  npx @11ty/eleventy
  npx tailwindcss -i ./src/_public/index.css -o ./_site/index.css

serve-eleventy:
  npx @11ty/eleventy --serve

serve-tailwind:
  npx tailwindcss -i ./src/_public/index.css -o ./_site/index.css --watch

serve:
  npx concurrently "just serve-eleventy" "just serve-tailwind" 