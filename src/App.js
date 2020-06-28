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
import Carousel from './pages/Carousel/Carousel';
import Notify from './pages/Notify/Notify';
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
            <Route path="/carousel">
                <Carousel/>
            </Route>
            <Route path="/thongbao">
                <Notify/>
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
