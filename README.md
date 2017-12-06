# {{.AppName}}

{{.Description}}

Owned by {{.TeamName}}

## Developing

- change the name of `./launch/template-node-library.yml` to `{{.AppName}}.yml`, and fill in values in that file

- update package.json with your library name (`@clever/<name>` if private)

- `npm install`

- Write the library in the `lib` folder

- Write tests in the `__tests__` folder

## Testing
```
make test
```

## Building for local use
```
# This will compile lib/ to javascript in the dist/ folder
make build
```
