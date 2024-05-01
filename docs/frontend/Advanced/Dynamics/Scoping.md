---
draft: false
---
Since `Module` adds `Temporal` attribute to your symbols, it is not clear when and how your dynamic symbols will be purged from the Kernel. Therefore use [`LeakyModule`](frontend/Reference/Misc/Language.md#`LeakyModule`) to scope all dynamic symbols. 