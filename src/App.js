import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import MainPage from './pages';
import ProjectsPage from './pages/projects';
import NotFound from './pages/404';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/*All our Routes goes here!*/}
          <Route path={process.env.PUBLIC_URL + '/'} component={MainPage} />
          <Route exact path='/Projects' component={ProjectsPage} />
          <Route exact path='/404' component={NotFound} />
          <Redirect to='/' />
        </Switch>
      </Router>
    );
  }
}

export default App; 