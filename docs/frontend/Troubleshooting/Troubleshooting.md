---
sidebar_position: 12
---
If something is not working as intended, please, post an [__issue on a Github__](https://github.com/JerryI/wolfram-js-frontend/issues) with the data evaluated on your Wolfram Engine, such as

```mathematica
$Version
$SystemID
```

and specify how you run an app (via Desktop App or as a script)

## App is damaged
Please see [Apple Silicon](frontend/Troubleshooting/Apple%20Silicon.md)

## Browsers console
Please locate the developer console (typically `Window` $\rightarrow$  `Toggle Developer Tools` or using a right click with a mouse `Inspect element`) and copy the error messages and a few above it (5-10).

## Logs dump
If it does not violate your privacy, there is a log-file, that records everything from the Wolfram Engine at the startup for 2 minutes.

You can locate it using `File` menu, then `Locate AppData` (installation directory), where in the root directory there is a file `2MinutesLog.txt` and send to us.

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

to prevent `DisplayForm` output.

:::tip
Send an issue to [Github](https://github.com/JerryI/wolfram-js-frontend/issues)
:::

:::tip
Feel free to contact us 🤗
:::


