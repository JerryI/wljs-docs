---
env:
  - WLJS
virtual: true
needsContainer: true
update: true
source: https://github.com/JerryI/wljs-graphics-d3/
---
Represents an arbitrary text label placed as a [Graphics](Graphics.md) object

```mathematica
Text["String", {0,0}]
```

Supports styling such as `Style` and `Directive`, i.e.

```mathematica
Graphics[{
	Text[Style["Hello World", FontSize->14], {0,0}]
}]
```

<Wl data={`"1:eJxTTMoPSmNiYGAo5gAS7kWJBRmZycVpjCARFiDhk1lcApEH8UJSK6A8ViARXFKZkxrMDWR5pObk5CuE5xflpCAUB5XmpIJNdcvPKwnOrErN5ANyEPIgozOBNAOYQNPHCWR45iamp4I1xgHdAwC0uSLj"`}>{`Graphics[{
	Text[Style["Hello World", FontSize->14], {0,0}]
}, ImageSize->350]`}</Wl>

### Styling options
The following options can be provided to [`Style`](Style.md) wrapper
- `FontSize->Number` - 10, 12, 14...
- `FontFamily->String` - this is basically an SVG attribute, please see [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/font-family). If you have imported any font using CSS, you can also use it. 

To change the color, just put in somewhere to the list
```mathematica
Graphics[{
	Red, Text["Hello World", {0,0}]
}]
```


<Wl data={`"1:eJxTTMoPSmNiYGAo5gAS7kWJBRmZycUQERYg4ZNZXJLGDJMPcndyzs/JL8pkBHIyGWAEQnlIakVJMDeQ4ZGak5OvEJ5flJOCahg2XUGlOanFnECGZ25iempwZlVqZhzQBgAvsx5S"`}>{`Graphics[{
	Red, Text["Hello World", {0,0}]
}, ImageSize->350]`}</Wl>

### Dynamic updates
For both the position and text content [dynamic updates](../../Tutorial/Dynamics.md) are supported

```mathematica
txt = RandomWord[];
pos = {0,0};

Graphics[{
	Red, Text[txt // Offload, pos // Offload]
}]
```

```mathematica
task = SetInterval[With[{},
	txt = RandomWord[];
	pos = RandomReal[{-1,1}, 2];
], 500];

SetTimeout[TaskRemove[task], 5000];
```

use `TaskRemove[task];` __to stop an animation__

### Math support
You can use __a limited Latex-math kinda mode__, that I implemented instead of full `Boxes` support as it was done in Mathematica, since it might slow down the system a lot

```mathematica
Text["wavenumber (cm^{-1})", {0,0}]
Text["\\alpha (cm^{-1})", {0,0}]
```

<Wl data={`"1:eJxTTMoPSmNiYGAo5gAS7kWJBRmZycUQERYg4ZNZXILghaRWlASLABnliWWpeaW5SalFChrJuXHVuoa1mqiaMoE0A5hA0y4IZMTEJOYUZCTi1Vs0ayYI3NyPkAsqzUkt5gQyPHMT01ODM6tSM+MYGRgAtLItlg=="`}>{`Graphics[{Text["wavenumber (cm^{-1})", {0,0}], Text["\\alpha (cm^{-1})", {0,-0.4}]}, ImageSize->350]`}</Wl>

A list of features
- most used Greek symbols like `alpha` and etc are supported
- subscript `a_1` or `a_{hi}`
- superscript `a^2` or `a^{23}`

<Wl data={`"1:eJxTTMoPSmNiYGAo5gAS7kWJBRmZycVpjCARFiDhk1lcApEH8UJSK0qC5YGMxHhDhfwihcT46ozMWoXEvBSFxDgjsEhctZFxLUIHSH8mkGYAEwjxoNKc1GJOIMMzNzE9NTizKjUzDmgpAOT3H4s="`}>{`Graphics[{Text["a_1 or a_{hi} and a^2 or a^{23}", {0,0}]}, ImageSize->350]`}</Wl>

In principle, it will anyway ends up in HTML, therefore one can use any special symbol

```mathematica
"I will display &#10060;"
```

<Wl data={`"1:eJxTTMoPSmNiYGAo5gAS7kWJBRmZycVpjCARFiDhk1lcApEH8UJSK0qCxYEMT4XyzJwchZTM4oKcxEoFNWVDAwMzA2uESpC+TCDNACYQ4kGlOanFnCATchPTU4Mzq1Iz44CWAQB/yRwZ"`}>{`Graphics[{Text["I will display &#10060;", {0,0}]}, ImageSize->350]`}</Wl>