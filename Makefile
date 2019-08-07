.PHONY: install start-progression publish lint

install:
	npm install

start-progression:
	npx babel-node src/bin/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint src/bin/brain-progression.js
