import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import NationalPark from './NationalPark';
import Contact from './Contact';
import GameReserve from './GameReserve';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/nationalPark" component={NationalPark} />
          <Route path="/gameReserve" component={GameReserve} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
