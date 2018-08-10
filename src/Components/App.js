import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import HomePage from './Home/Home'

import './../Styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
     <Switch>
       <Route exact path="/" component={HomePage}/>
       </Switch>
      </div>
    );
  }
}

export default App;
