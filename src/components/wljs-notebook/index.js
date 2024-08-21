import React, { useEffect, useRef } from 'react';
import {useState} from 'react'

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
            Object.keys(i).forEach((oName) => {
              const obj = new ObjectStorage(oName);
              obj.cache = i[oName];
              obj.cached = true;
            });

            Object.keys(promises).forEach((key) => {
              promises[key].resolve(i[key]);
            })
          })

          interpretate(result.symbols, {hold:true}).then((i) => {
            Object.keys(i).forEach((oName) => {
              core[oName] = async (args, env) => {
                const data = await interpretate(core[oName].data, env);
                return data;
              }
              core[oName].data = i[oName]

            });

            Object.keys(symbols).forEach((key) => {
              console.warn(key);
              symbols[key].resolve(i[key]);
            })
          })
          

        });
      })
      fetchFile = () => {}
    }

    core.Offload = (args, env) => {
      console.warn(args);
      return interpretate(args[0], env);
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

        console.warn('Asking for symbol' + name);

        symbols[name] = p;
        return p.promise;
      }

      interpretate.anonymous = async (d, org) => {
        //TODO Check if it set delayed or set... if set, then one need only to cache it
        console.log('Anonimous symbol: ' + JSON.stringify(d));  
      
        let name;
        //check it is a plain symbol
        if (d instanceof Array) {
          console.error(d);
          //console.error(jsonStringifyRecursive(org.global.stack));
          throw('unknown WL expression. Error at '+d[0]);
        } else {
          name = d;   //symbol
        }
      
        let data;
        const p = new Deferred();

        console.warn('Asking for symbol' + name);

        symbols[name] = p;
        data = await p.promise;
        
      
        //if it is OK
      
        core[name] = async (args, env) => {
          console.log('IE: calling our symbol...');
          //evaluate in the context
          const data = await interpretate(core[name].data, env);
      
          if (env.root && !env.novirtual) core[name].instances[env.root.uid] = env.root; //if it was evaluated insdide the container, then, add it to the tracking list
          //if (env.hold) return ['JSObject', core[name].data];
      
          return data;
        }
      
        core[name].update = async (args, env) => {
          //evaluate in the context
          //console.log('IE: update was called...');
      
          //cache good for numerics
          if (env.useCache) {
            if (!core[name].cached || core[name].currentData != core[name].data) {
              core[name].cached = await interpretate(core[name].data, env);
              core[name].currentData = core[name].data; //just copy the reference
              //console.log('cache miss');
            } 
      
            return core[name].cached;
          }
      
          const data = await interpretate(core[name].data, env);
          //if (env.hold) return ['JSObject', data];
          return data;
        }  
      
        core[name].destroy = async (args, env) => {
      
          delete core[name].instances[env.root.uid];
          console.warn(env.root.uid + ' was destroyed')
          console.warn('external symbol was destoryed');
        }  
      
        core[name].data = data; //get the data
      
        core[name].virtual = true;
        core[name].instances = {};
      
        //interpretate it AGAIN!
        return interpretate(d, org);
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

export function WLJSEditor({children, nid, id, type, display, opts}) {
  const ref = useRef(null);

  const {colorMode, setColorMode} = useColorMode();



  const [faded, setFaded] = useState(opts.Fade);

  useEffect( () => {
    const element = ref.current;
    console.warn('Create Codemirror');
    console.warn(display);

    const decoded = decodeURIComponent(children);
    console.log(decoded);
    

    const s = new window.SupportedCells[display].view({element: element}, decoded);

    if (s.editor && opts.Fade) {
   

      ref.current.addEventListener('focusin', () => {
        //console.error('FOCUS');
        setFaded(false);
      });

      ref.current.addEventListener('focusout', () => {
        //console.error('FOCUS');
        setFaded(true);
      });

    }

    return () => {
      s.dispose();
    }
  }, []);

  return (
    <div style={{filter: (colorMode == 'dark' ? 'invert(1) contrast(0.8) hue-rotate(-185deg)' : 'none')}} className="language-mathematica codeBlockContainer_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Container-styles-module theme-code-block">
       <div className={ faded ? "h-fade-20 codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module" : "codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"}>
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





