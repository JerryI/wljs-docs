---
draft: true
---

## Many instances - Single Object
Here it is simple, using [MakeBoxes](frontend/Reference/Decorations/MakeBoxes.md) one can allocate a dynamic symbol for updating all instances of a decoration.

## Many instances - Many objects
Here it comes tricky, since we need to distinguish between instances. For this case, once an instance created (not on the stage when `MakeBoxes` is applied, but on the interpretation stage).

For that reason we can call a special event we reserve for creation

```mathematica
EventFire["onCreate", ViewBox`InstanceMetaMarker[]] // Offload
```

Here `EventFire` is called not on Wolfram Kernel, but __on WLJS Interpreter site (from a browser)__. See more at [Communication](frontend/Advanced/Javascript/Communication.md). A symbol ``ViewBox`InstanceMetaMarker`` will automatically generate a unique meta marker and return it as an payload for an event.

