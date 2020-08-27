import React, { Component } from 'react';
import { Switch, Route} from "react-router-dom";
import { TransitionGroup, CSSTransition} from 'react-transition-group';
import './App.css';
import Page from './components/Page';
import LandingPage from './pages/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames='page' timeout={500}>
              <Switch location={location}>
                <Route exact path="/react-personal-website" render={ () => (<Page><LandingPage /></Page>)} />
                <Route exact path="/react-personal-website/about" render={ () => (<Page><About /></Page>)}  />
                <Route exact path="/react-personal-website/projects" render={ () => (<Page><Projects /></Page>)}  />
                <Route exact path="/react-personal-website/resume" render={ () => (<Page><Resume /></Page>)}  />
                <Route exact path="/react-personal-website/contact" render={ () => (<Page><Contact /></Page>)}  />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;

