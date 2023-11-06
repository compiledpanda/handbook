.PHONY: init
init:
	npm ci

.PHONY: build
build:
	npx @11ty/eleventy
	npx tailwindcss -i ./src/_public/index.css -o ./_site/index.css

.PHONY: serve-eleventy
serve-eleventy:
	npx @11ty/eleventy --serve

.PHONY: serve-tailwind
serve-tailwind:
	npx tailwindcss -i ./src/_public/index.css -o ./_site/index.css --watch

.PHONY: serve
serve:
	npx concurrently "make serve-eleventy" "make serve-tailwind"