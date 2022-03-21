import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import Photos from "./pages/Photos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "@material-ui/icons";

function App() {
  return (
    <Router>
      <div className="background">
        <div className="container">
          <Switch>
            <Route path="/homepage">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App; 

