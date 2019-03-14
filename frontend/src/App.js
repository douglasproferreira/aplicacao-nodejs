import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Production from './pages/Production';
import Edit from './components/Edit'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/production' component={Production} />
        <Route path='/Edit' component={Edit} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
