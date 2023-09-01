---
draft: true
---
:::danger
Is in development
:::

# VIM Mode example
Let us me (@JerryI) show you how to write an extension in practice. Starting from the following opened issue [Feature request : Option to use Vim/Neovim](https://github.com/JerryI/wolfram-js-frontend/issues/30)

## Preparations

Frontend uses CodeMirror 6 editor for basically everything. Since it is quite popular solution has being developed for 12 years, the corresponding plugin is already [there](https://github.com/replit/codemirror-vim).

```js
import { vim } from "@replit/codemirror-vim"
import {Vim, getCM} from "@replit/codemirror-vim"

window.EditorExtensions.push((self, lang) => {
	return vim()
})
```

