# `typescrit-config`

> eslint for typescript

## Usage

```shell
yarn add @leo-tools/eslint-config-typescript -D
```

```javascript
module.exports = {
  // Other settings
  extends: ['@leo-tools/eslint-config-typescript'],
  parserOptions: {
    project: './tsconfig.json'
  }
}
```

## @typescript-eslint dependencies

This package has @typescript-eslint/parser in dependencies.
And it has @typescript-eslint/eslint-plugin in peerDependencies.
Both are specified as ranges. It's probably safest for the installed versions of these packages to be the same. This can be achieved by:

Pin (exact version) the @typescript-eslint/eslint-plugin in package.json.
Have a package-lock.json which locks the version of the @typescript-eslint/parser sub-dependency.
And both pin/lock to the same version.

## FAQ

if you have follow issue, update @typescript-eslint/eslint-plugin and @typescript-eslint/parser

```text
 Failed to load plugin '@typescript-eslint' declared in '.eslintrc.js » @leo-tools/eslint-config-typescript': Class extends value undefined is not a constructor or null
```
