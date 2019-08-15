install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint *.js src/*
