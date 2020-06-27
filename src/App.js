import React, { Component } from 'react';
import './css/App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Register from './pages/Register/Register';
class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
