SHELL = /bin/bash

test:
	npm install
	npm run build
	npm run tsc

clean:
	rm -rf node_modules lib src/*.bs.js src/*.gen.tsx

.DEFAULT_GOAL := test

.PHONY: clean test
