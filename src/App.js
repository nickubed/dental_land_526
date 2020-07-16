import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import Procedures from './Procedures'
import WidgetShow from './WidgetShow'

export default function App(){
  let procedures = [
    "Deep Cleaning",
    "Filling",
    "Crown",
    "Root Canal",
    "Oral Surgery"
  ]
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Go Home!</Link>{' '}
          <Link to="/procedures">Our Procedures</Link>{' '}
          <Link to="/contact">Contact Us!</Link>
        </nav>
      </div>
      <div className="App">
      <h1>Dentist</h1>
        <Route exact path="/" component={Home} />
        <Route path="/procedures" render={() => <Procedures procedures={procedures}/>} />
        <Route path="/contact" component={Contact} />
        <Route path="/widget/:id" render={(props) => <WidgetShow {...props} />} />
      </div>
    </Router>
  );
}
