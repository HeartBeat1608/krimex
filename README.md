# {{.AppName}}

{{.Description}}

Owned by {{.TeamName}}

## Developing

- update package.json with your library name (`@clever/<name>` if private)

- `npm install`

- Write the library in the `lib` folder

- Write tests in the `__tests__` folder

- Add `- run: if [ "${CIRCLE_BRANCH}" == "master" ]; then $HOME/ci-scripts/circleci/npm-publish $NPM_TOKEN .; fi;` to `.circleci/config.yml`

## Testing
```
make test
```

## Building for local use
```
# This will compile lib/ to javascript in the dist/ folder
make build
```
