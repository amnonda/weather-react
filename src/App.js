import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Weather from './Components/Weather'

function App() {

  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header></Header>
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Weather></Weather>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
