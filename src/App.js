import React from 'react';
import { Switch, Route} from "react-router-dom";
import './App.css';
import LandingPage from './pages/LandingPage';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact'

function App() {
  return (
    <Switch>
      <Route exact path="/react-personal-website" component={LandingPage} />
      <Route exact path="/react-personal-website/about" component={About} />
      <Route exact path="/react-personal-website/projects" component={Projects} />
      <Route exact path="/react-personal-website/resume" component={Resume} />
      <Route exact path="/react-personal-website/contact" component={Contact} />
    </Switch>
  );
}

export default App;
