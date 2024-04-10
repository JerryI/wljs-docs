---
draft: false
---
## Case 1
Consider to use __to get the highest framerate__ and __smooth animations__
- [AnimationFrameListener](frontend/Reference/Graphics/AnimationFrameListener.md) for [Graphics](frontend/Reference/Graphics/Graphics.md) 
- [AnimationFrameListener](frontend/Reference/Graphics3D/AnimationFrameListener.md) for [Graphics3D](frontend/Reference/Graphics3D/Graphics3D.md)

with [TransitionType](frontend/Reference/Graphics/TransitionType.md) set to `None`  

## Case 2
Consider to use [`SetInterval`](frontend/Reference/Misc/Async.md#`SetInterval`) for a slow animations and simple stuff. Set [TransitionDuration](frontend/Reference/Graphics/TransitionDuration.md) and [TransitionType](frontend/Reference/Graphics/TransitionType.md) to a proper value to interpolate the values.

:::info
See examples in each section
:::



