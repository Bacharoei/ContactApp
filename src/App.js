import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home';
import './App.css';
import AddPerson from './components/AddPerson';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddPerson} />

      </Switch>
    </Router>

  );
}

export default App


