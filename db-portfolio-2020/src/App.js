import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        {/*All our Routes goes here!*/}
        <Route path='/Home' component={} />
        <Route path='/About' component={} />
        <Route path='/Projects' component={} />
      </Router>
    );
  }
}

export default App; 