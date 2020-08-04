import React from 'react';
import { Switch, Route} from "react-router-dom";
import './App.css';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/about" component={LandingPage} />
      <Route exact path="/projects" component={LandingPage} />
      <Route exact path="/resume" component={LandingPage} />
      <Route exact path="/contact" component={LandingPage} />
    </Switch>
  );
}

export default App;
