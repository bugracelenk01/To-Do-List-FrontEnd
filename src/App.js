import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

import DefaultLayout from './pages/DefaultLayout';

class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" component= {DefaultLayout}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
