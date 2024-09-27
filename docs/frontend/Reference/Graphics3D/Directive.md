---
env:
  - WLJS
source: https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine/blob/dev/src/kernel.js
package: wljs-graphics3d-threejs
---
Used for styling plots or 3D graphics primitives

```mathematica
Directive[directives___, opts___Rule]
```

## Directives
### `_RGBColor`
Set the working color

## Options

### `"Color"`
Accepts `_RGBColor`

### `"Emissive"`
Accepts `_RGBColor`

### `"Emissiveintensity"`
Accepts `_Real` from 0 to 1

### `"Roughness"`
Accepts `_Real` from 0 to 1

### `"Metalness"`
Accepts `_Real` from 0 to 1

### `"Ior"`
Accepts `_Real` from 0 to 100

### `"Transmission"`
Accepts `_Real` from 0 to 1

### `"Thinfilm"`

### `"MaterialThickness"`

### `"Attenuationcolor"`
Accepts `_RGBColor`

### `"Attenuationdistance"`

### `"Opacity"`
Accepts `_Real` from 0 to 1

### `"Clearcoat"`

### `"Clearcoatroughness"`

### `"Sheencolor"`

### `"Sheenroughness"`

### `"Iridescence"`

### `"Iridescenceior"`

### `"Iridescencethickness"`

### `"Specularcolor"`
Accepts `_RGBColor`

### `"Specularintensity"`

### `"Matte"`

### `"Flatshading"`

### `"Castshadow"`

