.PHONY: install start-progression publish lint

install:
	npm install

start-progression:
	npx babel-node src/bin/progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint *
