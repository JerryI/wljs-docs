---
sidebar_position: 5
---
# Customizing UI
This is the easiest thing to do among the stuff in the Plugin section. We need to utilize a single property of `package.json` file

```js
"wljs-meta": {
    "styles": "src/styles.css"
```

Then we can override the default CSS tables shipped with an app. 

:::tip
For manipulating styles, one can locate `Styles` section in the Settings with a live editor. Or use `.html` [cells](../../Cell%20types/HTML.md) to do the same.
:::

:::tip
Use `Inspect` tool from the context menu to make the process easier.
:::

:::info
Please, remove everything from the styles editor in the Settings, if you want to see the changes made by theme plugins, since the first one has the most priority. 
:::

Most properties are controlled by a corresponding CSS variables, the names are quite self-explanatory

```css
:root {
    --sidebar-text-color: rgb(52,51,52);
    --topbar-text-color: rgb(52,51,52);
    --filter-buttons-svg: brightness(0.5);
    --background-frame-color: rgb(236, 236, 236);
    --borders-color: #d8d4c800;
    --topbar-background: #eaeaea;
    --buttons-hover: rgb(255 206 59 / 53%);
    --filter-frame: none;
    --sidebar-background: transparent;
    --buttons-hover-inverted: rgb(255 206 59 / 53%);
    --background-menu: rgb(236 236 236 / 90%);
  
    --font-size-small: small;
    --font-size-medium: medium;
    --font-size-large: large;
    --font-size-x-large: x-large;
    --font-size-xx-large: xx-large;
    --font-size-x-small: x-small;
  
  
    --kernel-best: rgb(17 255 60 / 25%);
    --kernel-good: rgba(17, 184, 255, 0.35);
    --kernel-load: rgba(255, 231, 17, 0.35);
    --kernel-no: none;
    --kernel-undefined: none;
    --kernel-bad: rgba(255, 17, 17, 0.35);
  
    --kernel-animation-bad: linePAnim;
    --kernel-animation-best: none;
    --kernel-animation-good: linePAnim;
    --kernel-animation-load: linePAnim;
    --kernel-animation-no: none;
    --kernel-animation-undefined: none;
    --kernel-animation-bad: none;
  
    --editor-key-meta: #404740;
    --editor-key-keyword: #708;
    --editor-key-atom: #219;
    --editor-key-literal: #164;
    --editor-key-string: #a11;
    --editor-key-escape: #e40;
    --editor-key-variable: #00f;
    --editor-local-variable: #30a;
    --editor-key-type: #085;
    --editor-key-class: #167;
    --editor-special-variable: #256;
    --editor-key-property: #00c;
    --editor-key-comment: #940;
    --editor-key-invalid: #f00;
    
    --editor-outline: #696969;
  
    --editor-bracket-1: #5461c8;
    --editor-bracket-2: #c724b1;
    --editor-bracket-3: #e4002b;
    --editor-bracket-4: #ff6900;
    --editor-bracket-5: #978d00;
    --editor-bracket-6: #019e79;
    --editor-bracket-7: #008dc1;
  
    --editor-bracket-1-a: #5461c8; 
    --editor-bracket-2-a: #c724b1;
    --editor-bracket-3-a: #e4002b;
    --editor-bracket-4-a: #ff6900;
    --editor-bracket-5-a: #978d00;
    --editor-bracket-6-a: #019e79;
    --editor-bracket-7-a: #008dc1;
  
  }
  
  body[data-theme='dark'] {
      --sidebar-text-color: #d8d4c8;
      --topbar-text-color: #d1d1d1;
      --filter-buttons-svg: invert(1);
      --background-frame-color: #1a1a1a;
      --borders-color: black;
      --topbar-background: rgb(52,51,52);
      --buttons-hover: rgb(255 206 59 / 53%);
      --filter-frame: invert(1);
      --buttons-hover-inverted: #0031c487; 
      --background-menu: #1a1a1ae0;
  }
```

This is a standard CSS tables applied by the default. Editing them and inserting into `style.css` file in your plugin will do all work.
