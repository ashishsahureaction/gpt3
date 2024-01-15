import './App.css';
import React from 'react'
import {Article,Brand,CTA,Feature,Navbar} from './components';
import {Blog,Features,Footer,Header,Possibility,WhatGPT3} from './containers';

const App=()=> {
  return (
    <div className='App'> 
<div className='gradient__bg'>
<Navbar/>
<Header/>
<Article/>
</div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
      


      
      <h1>hello</h1>
    </div>
  )
}

export default App
