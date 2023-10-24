---
sidebar_position: 12
---
If something is not working as intended, please, post an [__issue on a Github__](https://github.com/JerryI/wolfram-js-frontend/issues) with the data evaluated on your Wolfram Kernel, such as

```mathematica
$Version
$SystemID
```

and specify how you run an app (via Electron Wrapper or as a script)

## Browsers console
Please locate the developer console (typically `Window` $\rightarrow$  `Toggle Developer Tools` or using a right click with a mouse `Inspect element`) and copy the error messages and a few above it (5-10).

## Logs dump
If it does not violate your privacy, there is a log-file, that records everything from the Wolfram Engine at the startup for 2 minutes.

You can locate it using `File` menu, then `Locate AppData` (installation directory), where in the root directory there is a file `2MinutesLog.txt` and send to us.

## Hot line & general discussion chat
Please feel free to join [Telegram Group](https://t.me/+PBotB9UJw-hiZDEy).

## Common cases
### UI was not loaded properly
It might be an issue with sockets, try `Window` $\rightarrow$ `Force reload`

### Kernel is not connected
Try to read the active window by `Window` $\rightarrow$ `Reload window`

If not, then, one can try to restart it again by `Evaluation` $\rightarrow$ `Kernel` $\rightarrow$ `Restart`
If it did not help, then the next is for you

### Red line on a sidebar (no active kernel)
This means, that frontend could not start a secondary kernel due to license problem. A sign of it will appear in the `Log`-window.

:::warning
Freeware Wolfram Engine allows __only two instances__ of kernel running. WLJS Frontend effectively uses both of them.
:::

Try to use task-manager in our OS to kill running Wolfram Kernels or close an active ones and restart the whole app.

### Random Javascript error message
It might be the sign, that a function you are trying to run was not implemented on WLJS [interpreter](../interpreter/intro.md), usually it is connected with graphics primitives, which are still in development, or you provided a wrong data to it. Please, check __Reference__ to see what is supported and leave your message on [Github](https://github.com/JerryI/wolfram-js-frontend/issues) or in a [Hot line & general discussion chat](#Hot%20line%20&%20general%20discussion%20chat), so that we can fix it later.

#### "destroy is method is not defined"
Usually this is not a big issue, most functions, which experiences this error will still work properly. But if it does bother you, please, leave a message on [Github](https://github.com/JerryI/wolfram-js-frontend/issues).

### The output of a cell does not look correct
This might be connected with [InterpretationBox](Reference/Decorations/InterpretationBox.md) or some other decorations did work well, try to evaluate your expression with [InputForm](Reference/Decorations/InputForm.md)

```mathematica
% // InputForm
```

to prevent `DisplayForm` output.

:::tip
Feel free to contact us 🤗, we are basically two guys @JerryI and @KirillBelovTest, not a company, not some big shots.
:::


