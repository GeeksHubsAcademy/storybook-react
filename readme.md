# STORYBOOK REACT GEEKSHUBS

Creation and curation of hight quality react components.

## Links

[Web](https://geekshubsacademy.github.io/storybook-react/)

[Npm](https://www.npmjs.com/package/storybook-react-geekshubs)

[Github](https://github.com/GeeksHubsAcademy/storybook-react)


## Usage

### Installation:

```sh
npm i storybook-react-geekshubs@latest --save --save-exact
```

### As npm script:
```json
// package.json
{
  ...
  "scripts": {
    "pull:components": "npm i storybook-react-geekshubs@latest --save --save-exact",
  },
  ...
}
```

### Import individually from /dist;
```js
import Button from "storybook-react-geekshubs/dist/components/Buttons/Button";

//...

<Button>Click me</Button>

```

## Folder structure

```
- dist
    - components
    - hooks
    - layout
    - views
    - servicies

```

### scripts

```json
    "start": "start-storybook -p 6006",
    "patch": "npm version patch",
    "prebuild": "npm run patch",
    "build": "npm run build:lib && npm run build:docs",
    "build:docs": "build-storybook -o docs",
    "build:lib": "rimraf dist && NODE_ENV=production babel src --out-dir dist",
    "predeploy": "npm run build",
    "deploy": "git add . && git commit -m 'build' && git push",
    "postdeploy": "npm run publi",
    "publi": "npm publish",
    "prepubli": "npm whoami || npm login"
```

### Deployment

Run `npm run deploy`  to do everything:  bump patch version, build docs and lib, push to github nad publish to npm

### Sources

- https://github.com/brillout/awesome-react-components
- https://github.com/enaqx/awesome-react
- https://github.com/nikgraf/react-hooks
