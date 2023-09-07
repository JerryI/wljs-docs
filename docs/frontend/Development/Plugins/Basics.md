:::danger
Is in development
:::

Each plugin/extension is a folder with an arbitrary structure, but in the root there must be a `package.json` file (from nodejs) with the following content

```json
{
  "name": "wljs-template",
  "version": "0.0.1",
  "description": "A template for writting packages",
  "scripts": {
    "build": "node --max-old-space-size=8192 ./node_modules/.bin/rollup --config rollup.config.mjs",
    "watch": "node --max-old-space-size=8192 ./node_modules/.bin/rollup --config rollup.config.mjs -w"
  },
  "wljs-meta": {
    "css": "dist/styles.css",
    "jsmodule": "dist/kernel.js",
    "wlkernel": "src/kernel.wln",
    "wl": "src/frontend.wln",
    "autocomplete": "src/autocomplete.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/JerryI/wljs-template"
  },
  "author": "Kirill Vasin",
  "license": "GPL",
  "bugs": {
    "url": "https://github.com/JerryI/wljs-template/issues"
  },
  "homepage": "https://github.com/JerryI/wljs-template#readme",
  "dependencies": {
    "@rollup/plugin-commonjs": "^24.0.1",
    "@rollup/plugin-json": "^6.0.0",
    "@rollup/plugin-node-resolve": "15.0.1",
    "rollup": "^3.20.6",
    "rollup-plugin-combine": "^2.1.1",
    "serve-static": "^1.14.1",
    "systemjs": "^6.14.1"
  }
}
```

The most important field here is `"wljs-meta"`, where one can specify file to load for a kernel, master kernel, javascript files, styles and etc. There is no any restrictions, one can load anything into the kernel.

## Easy steps to pack your code into a plugin
...