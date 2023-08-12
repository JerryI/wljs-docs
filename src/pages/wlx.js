import React, {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/WLXFeatures';
import CodeBlock from '@theme/CodeBlock';
import Sandbox from '@site/src/components/sandbox';



import Component from '@site/src/components/wljs-notebook-react/includes';
import Notebook from '@site/src/components/wljs-notebook-react';

import { useEffect, useRef } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      document.documentElement.style.setProperty('--ifm-color-primary', '#2dd4bf');
      document.documentElement.setAttribute('data-theme', 'dark');
      //document.getElementsByClassName("navbar__title")[0].innerText = "Wolfram Language XML"
      //document.getElementsByClassName("navbar__logo")[0].firstChild.src = "/wljs-docs/img/logo2.svg";
      setTimeout(() => document.documentElement.setAttribute('data-theme', 'dark'), 100);
    }
  }, []); 

  const handleMouseEnter = () => {
     setIsHover(true);
  };
  const handleMouseLeave = () => {
     setIsHover(false);
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{"background-color": "#3B4252"}}>
      <div className="container">
        <img width={"50%"} src={"img/logo2.svg"}/>
        <Component></Component>
        <h1 className="hero__title" style={{"color": "#2dd4bf"}}>Wolfram Language XML</h1>
        <p className="hero__subtitle" style={{"color": "white", 'marginTop': '-0.6em', 'paddingBottom': '0.6em' }}>A syntax extension for Wolfram Language that lets you write HTML-like markup inside a Wolfram Language Script like JSX.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/wlx/install">
            Getting started - 5min ⏱️
          </Link>
        </div>

      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
