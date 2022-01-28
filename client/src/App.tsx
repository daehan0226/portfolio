import React, {useRef, useState} from 'react';

import { ThemeProvider } from '@mui/material/styles'
import Divider from '@mui/material/Divider';

import './App.css';
import {Header, Footer} from "./components"
import {Home} from "./components/home"
import {About} from "./components/about"
import {Project} from "./components/project"
import {Blog} from "./components/blog"

import theme from "./ui/theme"
import {ScrollTop} from "./ui/scroll"

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  function handleScrollClick(target: string) {
    let targetRef = homeRef;
    switch (target) {
      case 'About':
        targetRef = aboutRef;
        break;
      case 'Projects':
        targetRef = projectRef;
        break;
      case 'Blog':
        targetRef = blogRef;
        break;
      default:
        targetRef = homeRef;
    }
    targetRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App" id="top-anchor">
        <Header handleScroll={handleScrollClick}/>
        <Divider sx={{backgroundColor: "secondary.light" , borderBottomWidth: 5 }}/>
        <main>
            <Home refObject={homeRef} handleScroll={handleScrollClick} />
            <About refObject={aboutRef} />
            <Project refObject={projectRef}/>
            <Blog refObject={blogRef} />
        </main> 
        <Footer />
        <ScrollTop scrollTo='#top-anchor'/>
      </div>
    </ThemeProvider>
  );
}

export default App;
