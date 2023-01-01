import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TvPage from './pages/TvPage';
import MovieDetail from './pages/MovieDetail';
import TvDetail from './pages/TvDetail';



const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/tv/:id" component={TvDetail}/>
        <Route path="/tv" component={TvPage}/>
        <Route path="/movie/:id" component={MovieDetail}/>
      </Switch>
    </Router>
  );
}

export default App;
