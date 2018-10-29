import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import RegisterForm from './components/RegisterForm/RegisterForm'
import Create from './components/CreatePage/CreatePage'
import Update from './components/UpdatePage/UpdatePage'


class App extends Component {
  render() {
          return (
              <Router>
                  <div>
                      <ul>
                          <li>
                              <Link to="/">Create</Link>
                          </li>
                          <li>
                              <Link to="/update">Update</Link>
                          </li>
                      </ul>
                      <hr />

                      <Route exact path="/" component={Create} />
                      <Route path="/update" component={Update} />

                  </div>
              </Router>
          );
  }
}

export default App;
