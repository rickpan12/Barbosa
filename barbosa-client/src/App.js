import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import Photos from "./pages/Photos";
import Contact from './pages/Contact'
import Ameneties from './pages/Ameneties'
import BookRoom from './pages/BookRoom'
import About from './pages/About'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

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
              <Photos />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/ameneties'>
              <Ameneties />
            </Route>
            <Route path='/bookroom'>
              <BookRoom />
            </Route>
            <Route path='/about'>
              <About />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;

