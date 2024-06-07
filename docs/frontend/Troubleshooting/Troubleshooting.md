---
sidebar_position: 12
---
If something is not working as intended, please, post an [__issue on a Github__](https://github.com/JerryI/wolfram-js-frontend/issues) with the data evaluated on your Wolfram Engine, such as

```mathematica
$Version
$SystemID
```

and specify how you run an app (via Desktop App or as a script)

## Cache issues
Sometimes after an update browser's cache is still outdated. Please run (depending on your browser)

- `Ctrl` + `F5`
- `Shirt` + `F5`
- `Force Reload`
- `Reload window`
- `Clear cache and reload`

## Browsers console
Please locate the developer console (typically `Window` $\rightarrow$  `Toggle Developer Tools` or using a right click with a mouse `Inspect element`) and copy the error messages and a few above it (5-10).

## Logs dump
If it does not violate your privacy, there is a `DEBUG` mode, which can be enabled at the startup. Follow the steps
1. Restart an app and click `DEBUG` in the launcher window
2. Do particular actions, which leads to your error
3. Close an App normally
4. A window a collected log file will open
5. Send it to us (direct message on Telegram, email or Github Issues)

## Hot line & general discussion chat
Please feel free to join [Telegram Group](https://t.me/+PBotB9UJw-hiZDEy).

## Common cases
### UI was not loaded properly
It might be an issue with sockets, try `Window` or Top-Menu $\rightarrow$ `Force reload` or `Reload`

### The output of a cell does not look correct
This might be connected with `Boxes` or some other decorations did work well, try to evaluate your expression with [InputForm](frontend/Reference/Decorations/InputForm.md)

```mathematica
% // InputForm
```

to prevent `DisplayForm` output or

```mathematica
% // Rasterize
```

:::tip
Send an issue to [Github](https://github.com/JerryI/wolfram-js-frontend/issues)
:::



