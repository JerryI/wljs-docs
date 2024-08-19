import React, { useEffect, useRef } from 'react';

import { md5 } from 'js-md5';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import SvgIcon from './download.svg';

import { useColorMode } from '@docusaurus/theme-common';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { interpolate } from '@docusaurus/Interpolate';
import useIsBrowser from '@docusaurus/useIsBrowser';

//import { Mma } from 'mma-uncompress/src/mma.js';

export function WLJSStore({json, notebook}) {
  const {colorMode, setColorMode} = useColorMode();

  useEffect( () => {
    console.warn('Create store');
    console.warn(json);
    const promises = {};
    const symbols =  {};

    let fetchFile = () => {
      fetch(json).then((data) => {
        console.log(data);
        data.json().then((result) => {
          interpretate(result.objects, {hold:true}).then((i) => {
            Object.keys(promises).forEach((key) => {
              promises[key].resolve(i[key]);
            })
          })

          interpretate(result.symbols, {hold:true}).then((i) => {
            Object.keys(symbols).forEach((key) => {
              symbols[key].resolve(i[key]);
            })
          })
          

        });
      })
      fetchFile = () => {}
    }

    window.server = {};
      window.server.ask = (what) => {
        const p = new Deferred();
        
        if (what.length < 42) {
          console.error('Unknown command');
          console.error(what);
          return false;
        }

        promises[what.slice(42,-2)] = p;
        fetchFile();
        return p.promise;
      }

      window.server.getSymbol = (name) => {
        const p = new Deferred();

        symbols[name] = p;
        return p.promise;
      }
  });

  return (<>
    <a href={notebook} className={(colorMode == 'dark' ? 'p-2 text-xs w-full flex ring-1 ring-inset shadow ring-gray-300 text-gray-300 my-2' : 'p-2 text-xs w-full flex ring-1 ring-inset text-gray-600 shadow ring-gray-300 bg-gray-300 my-2')} >Download original notebook <SvgIcon/></a>
  </>);
}

export function WLJSHTML({children, data}) {
  const markup = { __html:  decodeURIComponent(children)};
  return <div dangerouslySetInnerHTML={markup} />;
}

export function WLJSEditor({children, nid, id, type, display}) {
  const ref = useRef(null);

  const {colorMode, setColorMode} = useColorMode();

  useEffect( () => {
    const element = ref.current;
    console.warn('Create Codemirror');
    console.warn(display);

    const decoded = decodeURIComponent(children);
    console.log(decoded);
    

    const s = new window.SupportedCells[display].view({element: element}, decoded);

    return () => {
      s.dispose();
    }
  }, []);

  return (
    <div style={{filter: (colorMode == 'dark' ? 'invert(1) contrast(0.8) hue-rotate(-185deg)' : 'none')}} className="language-mathematica codeBlockContainer_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Container-styles-module theme-code-block">
       <div className="codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
          <pre tabIndex="0" className="prism-code language-mathematica codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar" style={{color: 'rgb(57, 58, 52)', backgroundColor: 'rgb(246, 248, 250)'}}>
            <code ref={ref} className="codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"></code>
          </pre>
       </div>
    </div>   
  )
}

export function WLJS({children, data}) {
  
  const ref = useRef(null);

  const {colorMode, setColorMode} = useColorMode();

  useEffect( () => {
    const element = ref.current;
    console.log('Create Codemirror');

    window.CMInitialized = true;

    if (window.CMInitialized) {

    }

    const s = new window.SupportedCells['codemirror'].view({element: element}, children);

    return () => {
      if (s) {
        //s.destroy();
        console.log('Remove Codemirror');
      }
    }
  }, []);

  return (
    <div style={{filter: (colorMode == 'dark' ? 'invert(1) contrast(0.8) hue-rotate(-185deg)' : 'none')}} className="language-mathematica codeBlockContainer_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Container-styles-module theme-code-block">
       <div className="codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
          <pre tabIndex="0" className="prism-code language-mathematica codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar" style={{color: 'rgb(57, 58, 52)', backgroundColor: 'rgb(246, 248, 250)'}}>
            <code ref={ref} className="codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"></code>
          </pre>
       </div>
    </div>   
  )
}





