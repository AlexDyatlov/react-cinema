import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import CardMovie from './components/CardMovie';


function App() {
  return <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={CardMovie} />
  </HashRouter>
}

export default App;
