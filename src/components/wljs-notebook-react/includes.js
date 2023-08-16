import React, { useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const list = [
    "https://cdn.statically.io/gh/JerryI/wljs-interpreter/master/src/interpreter.js",
    "https://cdn.statically.io/gh/JerryI/wljs-interpreter/master/src/core.js",
    "https://cdn.statically.io/gh/JerryI/wljs-interpreter/master/src/metamarkers.js",
    "https://cdn.statically.io/gh/JerryI/wljs-cells/master/dist/kernel.js",
    "https://cdn.statically.io/gh/JerryI/wljs-editor/master/dist/kernel.js",
    "https://cdn.statically.io/gh/JerryI/wljs-editor/master/src/boxes.js",
    "https://cdn.statically.io/gh/JerryI/wljs-markdown-support/master/dist/kernel.js",
    "https://cdn.statically.io/gh/JerryI/wljs-js-support/master/dist/kernel.js",
    "https://cdn.statically.io/gh/JerryI/wljs-html-support/master/dist/kernel.js",
    "https://cdn.statically.io/gh/JerryI/wljs-inputs/master/dist/kernel.js",
    "https://cdn.jsdelivr.net/gh/JerryI/wljs-graphics-d3@main/dist/kernel.js",
    "https://cdn.statically.io/gh/JerryI/wljs-plotly/master/dist/kernel.js",
    "https://cdn.statically.io/gh/JerryI/wljs-hydrator/master/src/kernel.js",
    "https://cdn.statically.io/gh/JerryI/Mathematica-ThreeJS-graphics-engine/master/dist/kernel.js"
];
/*
const list = [
  "/wljs-docs/js/interpreter.js",
  "/wljs-docs/js/core.js",
  "/wljs-docs/js/merged.js",
  "https://cdn.statically.io/gh/JerryI/wljs-editor/master/dist/kernel.js",
  "https://cdn.statically.io/gh/JerryI/wljs-editor/master/src/boxes.js",
  "https://cdn.statically.io/gh/JerryI/wljs-markdown-support/master/dist/kernel.js",
  "https://cdn.statically.io/gh/JerryI/wljs-js-support/master/dist/kernel.js",
  "https://cdn.statically.io/gh/JerryI/wljs-html-support/master/dist/kernel.js",
  "https://cdn.statically.io/gh/JerryI/wljs-inputs/master/dist/kernel.js",
  "https://cdn.statically.io/gh/JerryI/wljs-graphics-d3/master/dist/kernel.js"
];
*/


export function loadScript(url) {
    return new Promise((resolve, reject) => {
    if (ExecutionEnvironment.canUseDOM) {
      var script = document.createElement('script')
      script.src = url
      script.type = "module";
      script.onload = () => {
        resolve()
      }
      script.onerror = () => {
        reject('cannot load script '+ url)
      }
      document.head.appendChild(script);
    }
    })
  }

  const event = new Event("load-wljs");

export default function Component(props) {

    if (list.indexOf(props.children) < 0) {
      //list.push(props.children);
    }

    useEffect(async () => {
        if (ExecutionEnvironment.canUseDOM) {
          
          window.socket = {
            send: () => {console.warn('socket is offline')}
          }

          window.loadedNotebooks = {};
          if (window.LoadedWLJS) {
            //alert('already loading...');
            return;
          }

          //alert('loading...');

          for (const a of list) {
            await loadScript(a);
          }
        
          window.LoadedWLJS = true;
          window.dispatchEvent(event);
        }
    }, []);

    return (
        <div id="helmet">
        </div>          
    )
  }