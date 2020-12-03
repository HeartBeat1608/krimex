include node.mk
.PHONY: all test build format format-all format-check lint-es lint-fix lint
SHELL := /bin/bash

TS_FILES := $(shell find lib/ -name "*.ts" -o -name "*.tsx")
FORMATTED_FILES := $(TS_FILES) # Add other file types as you see fit, e.g. JSON files, config files
MODIFIED_FORMATTED_FILES := $(shell git diff --name-only master $(FORMATTED_FILES))

PRETTIER := ./node_modules/.bin/prettier
ESLINT := ./node_modules/.bin/eslint

all: test build

format:
	@echo "Formatting modified files..."
	@$(PRETTIER) --write $(MODIFIED_FORMATTED_FILES)

format-all:
	@echo "Formatting all files..."
	@$(PRETTIER) --write $(FORMATTED_FILES)

format-check:
	@echo "Running format check..."
	@$(PRETTIER) --list-different $(FORMATTED_FILES) || \
		(echo -e "❌ \033[0;31m Prettier found discrepancies in the above files. Run 'make format' to fix.\033[0m" && false)

lint-es:
	@echo "Running eslint..."
	@$(ESLINT) $(TS_FILES)

lint-fix:
	@echo "Running eslint --fix"
	@$(ESLINT) --fix $(TS_FILES) || \
		(echo "\033[0;31mThe above errors require manual fixing.\033[0m" && true)

lint: format-check lint-es

test:
	@echo "Testing..."
	node_modules/.bin/jest

build:
	@echo "Building..."
	@rm -rf dist
	@./node_modules/.bin/tsc --declaration
