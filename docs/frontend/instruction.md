---
sidebar_position: 1
enableComments: true
sidebar_class_name: green
slug: /
---
# Quick start
WLJS Notebook __requires  `wolframscript` (see Freeware [Wolfram Engine](https://www.wolfram.com/engine/) or Wolfram Kernel)__ installed on your PC/Mac. *If not, WLJS application will redirect you to the official download page*

import img from './../1_oEnvgJSyL-PNDTW8arOehw.webp';

> All algorithms, functions, and other components of the Wolfram Language provided by the Wolfram Engine are the intellectual property of Wolfram Research, Inc.


<img src={img} style={{marginLeft:'auto', marginRight:'auto', display:'block'}}/>

<h2 style={{'text-align':'center'}}> 

[Overview 🚀](frontend/Overview.md) 

</h2>

:::note
You do not need to have Mathematica, or other paid software installed to run WLJS Notebook. No subscription model, only one-time registration at *wolfram.com* is needed for a personal use. Please check the [license agreement](https://www.wolfram.com/legal/terms/wolfram-engine.html).
:::

If you are __new to Wolfram Language__, please, check the [corresponding page](./Wolfram%20Language.md).


There are two ways you can choose from

import Tabs from '@theme/Tabs';  
import TabItem from '@theme/TabItem';

## Desktop application
Notebook interface is shipped as an Electron application, which is cross-platform and has most benefits of a native desktop app. __This is the easiest way__

[Releases](https://github.com/JerryI/wolfram-js-frontend/releases)

<Tabs  
defaultValue="Windows"  
values={[  
{label: 'Windows', value: 'Windows'},  
{label: 'Linux', value: 'Linux'},  
{label: 'Mac', value: 'Mac'},  
]}>  
<TabItem value="Windows">
- [Windows](https://github.com/JerryI/wolfram-js-frontend/releases/download/2.5.5/wljs-notebook-2.5.5-x64.exe)
</TabItem>  
<TabItem value="Linux">
- [Linux (Deb)](https://github.com/JerryI/wolfram-js-frontend/releases/download/2.5.5/wljs-notebook-2.5.5-amd64.deb)
- [Linux (AppImage)](https://github.com/JerryI/wolfram-js-frontend/releases/download/2.5.5/wljs-notebook-2.5.5-x86_64.AppImage)
</TabItem> 
<TabItem value="Mac">

- [M1](https://github.com/JerryI/wolfram-js-frontend/releases/download/2.5.5/wljs-notebook-2.5.5-arm64.dmg)
- [Intel](https://github.com/JerryI/wolfram-js-frontend/releases/download/2.5.5/wljs-notebook-2.5.5-x64.dmg)

</TabItem>  
</Tabs>

It comes with a launcher, that takes care about all updates, files extension association and etc. Also see [releases](https://github.com/JerryI/wolfram-js-frontend/releases) page for more portable installation bundles (no docs).

For all options fully offline work is 100% possible.

## Server application
Since this is a web-based application, you can also run on a server. User interface is  reachable from any modern browser. Clone a master branch and run `wolframscript`

```bash
git clone https://github.com/JerryI/wolfram-js-frontend
cd wolfram-js-frontend
wolframscript -f Scripts/start.wls
```

It will take some time to download all core plugins, after that you can start using it by opening your browser 

```bash
...
Open http://127.0.0.1:20560 in your browser
```

To start server on a specific hostname

```shell
wolframscript -f Scripts/start.wls host 0.0.0.0 http 8080 ws 8081 ws2 8082 docs 8085
```

that will open __an HTTP server__ on `8080` port with `8081`, `8082` __used for realtime communication__ and __docs pages__ at `8085`

#### Extra arguments

- set the home folder (overrides the default settings)
```
wolframscript -f Scripts/start.wls folder "Demos"
```

- disable autolaunch of the evaluation kernel
```
wolframscript -f Scripts/start.wls noautolaunch True
```


### A side note for servers with no desktop interface
You might need to install the following (for `Image` and some other graphics to work properly) [libraries](https://support.wolfram.com/59044).



## Docker container
*contributed by [@yloose](https://github.com/yloose)*

Please follow [the instructions](https://github.com/JerryI/wolfram-js-frontend/blob/main/container/README.md)

> ## Sponsorship
> *To help maintain this open-source project* ❤️
> - [__GitHub Sponsors__](https://github.com/sponsors/JerryI)
> - [__PayPal__](https://www.paypal.com/donate/?hosted_button_id=BN9LWUUUJGW54)

> Any amount (one-time or monthly) is appreciated, and your profile will be permanently displayed on this page. Thank you for helping us!


## Showcase
**[Blog posts](https://jerryi.github.io/wljs-docs/blog)**

[🔗 Link](https://jerryi.github.io/wljs-docs/blog) Pages of real-life problems solved using WLJS Notebook and published as interactive notebooks runnning in your browser. Try it out


**[WLJS Notebook Demonstration Project](https://jerryi.github.io/wljs-demo/)**

[🔗 Link](https://jerryi.github.io/wljs-demo/)
Notebooks posted as static web pages showcase various examples that demonstrate how to use the Wolfram Language and the dynamic features of our frontend. 


## Media
- YTS 📽️ [You don't need to program your figures manually](https://youtube.com/shorts/Z76dMHK8POM?feature=share)
- YTS 📽️ [How to do Dynamics in Computation Notebook](https://youtube.com/shorts/T-ryDA1Sb3g?feature=share)
- YTS 📽️ [We made AI Copilot in your Notebook 🤖](https://youtube.com/shorts/6s9m5ZGPkdE?feature=share)
- YTS 📽️ [AI Copilot in your Notebook. Part 2 🤖](https://youtube.com/shorts/B_ZVjN9cvQM?feature=share)

## Publications 📢
- *Medium* May 2024: [Reinventing dynamic and portable notebooks with Javascript and Wolfram Language](https://medium.com/@krikus.ms/reinventing-dynamic-and-portable-notebooks-with-javascript-and-wolfram-language-22701d38d651)
- *Yandex Open Source Jam* April 2024: [Dynamic notebook interface + Wolfram Language](https://www.youtube.com/watch?v=tmAY_5Wto-E) (Russian language only)
- *DPG2024 Berlin March 2024*: [Computational Notebook as a Modern Multitool for Scientists](https://www.dpg-verhandlungen.de/year/2024/conference/berlin/part/agi/session/4/contribution/4), [Slides](https://www.dpg-physik.de/vereinigungen/fachuebergreifend/ag/agi/veranstaltungen/tagungen-und-workshops/berlin_2024/agi-4_4-kirill-vasin.pdf)
- *Habrahabr* October 2023 [Open-source блокнот Wolfram Language или как воссоздать минимальное ядро Mathematica на Javascript и не только](https://habr.com/ru/articles/767490/) (Russian language only)
- *Habrahabr* October 2023 [Wolfram Language JavaScript Frontend](https://habr.com/ru/articles/766360/) (Russian language only)