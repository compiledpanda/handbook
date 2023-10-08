init:
  npm ci

build:
  npx @11ty/eleventy
  npx tailwindcss -i ./src/index.css -o ./_site/index.css

serve:
  npx @11ty/eleventy --serve