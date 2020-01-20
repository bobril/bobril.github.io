## Bobril-build

### How to find out what takes space in your bundle

First you need to build your project with enabled sourcemaps. Because only new bundler support generating them it needs to be enabled with `newBundler` parameter. It is good to override sourceRoot in generated sourcemap to be just `.`, because it will remove one nesting from result.

```bash
bb build --newBundler true --sourcemap yes --sourceRoot .
```

or shorter

```bash
bb b -x 1 -g yes --sourceRoot .
```

Second and last step is to use [source-map-explorer](https://github.com/danvk/source-map-explorer) on generated bundle. By default it will be in `dist` subdirectory and will be named `a.js`.

```bash
npx source-map-explorer a.js
```
