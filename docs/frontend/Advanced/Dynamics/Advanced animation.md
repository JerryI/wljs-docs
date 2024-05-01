---
draft: false
---
## Summary
### Way 1
Consider to use __to get the highest framerate__ and __smooth animations__
- [AnimationFrameListener](frontend/Reference/Graphics/AnimationFrameListener.md) for [Graphics](frontend/Reference/Graphics/Graphics.md) 
- [AnimationFrameListener](frontend/Reference/Graphics3D/AnimationFrameListener.md) for [Graphics3D](frontend/Reference/Graphics3D/Graphics3D.md)

with [TransitionType](frontend/Reference/Graphics/TransitionType.md) set to `None` if the calculation time does not exceed the `1/60` of the second. Otherwise consider to use `"Linear"` interpolation option and a small amount of [TransitionDuration](frontend/Reference/Graphics/TransitionDuration.md) around 10-100 depending on how long it takes to update the data.

### Way 2
Consider to use [`SetInterval`](frontend/Reference/Misc/Async.md#`SetInterval`) for a slow animations and simple stuff. Set [TransitionDuration](frontend/Reference/Graphics/TransitionDuration.md) and [TransitionType](frontend/Reference/Graphics/TransitionType.md) to a proper value to interpolate the values.

Usually if your [`SetInterval`](frontend/Reference/Misc/Async.md#`SetInterval`) is let's say `100 ms`, then [TransitionDuration](frontend/Reference/Graphics/TransitionDuration.md) should be around `100 ms` as well to get *the smoothest animation*.

:::info
See examples in each reference
:::



