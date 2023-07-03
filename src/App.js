import React from 'react';
// components
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Services from './components/Services';

import Skill from './components/Skill';
import Work from './components/Work';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Skill />

      <Work />
      <Contact />
      <div className='h-[200px]'></div>
    </div>
  );
};

export default App;
