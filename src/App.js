import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
