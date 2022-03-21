import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import Photos from "./pages/Photos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="background">
        <div className="container">
          <Switch>
            <Route path="/homepage">
              <HomePage />
            </Route>
            <Route path="/photos">
              <Photos/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App; 

