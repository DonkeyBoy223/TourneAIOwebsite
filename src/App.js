import React from 'react';

import { Footer, Sitelist, Faq, Features, Aboutus, Header } from './containers';
import {Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Aboutus />
    <Features />
    <Faq />
    <Sitelist />
    <Footer />
  </div>
);

export default App;