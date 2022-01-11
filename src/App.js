import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
