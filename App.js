import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./../styles/App.css";
import CreateSurvey from './CreateSurvey'
import Publish from './Publish'

function App() {
  return (
    <div className="container">
      <div id="main">
      <h1>Survey Tiger</h1>
          <Router>
            <Switch>
              <Route path="/" exact>
                <div className="buttons">
                  <Link to="/create"><button className="create">Create Survey</button></Link>
                  <Link to="/take"><button className="take">Take Survey</button></Link>
                </div>
              </Route>
              <Route path="/create">
                <CreateSurvey />
              </Route>
              <Route path="/publish">
                <Publish />
              </Route>
            </Switch>
          </Router>
      </div>
    </div>
  );
}


export default App;
