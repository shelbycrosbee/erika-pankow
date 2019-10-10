import React from 'react';
import './App.css';
import AboutPage from './components/About/AboutPage'
import HomePage from './components/Home/HomePage'
import { Switch, Route, withRouter } from 'react-router-dom'
import Recipients from './components/Recipients/Recipients';
import BoardMembers from './components/BoardMembers/BoardMembers';
import Donate from './components/About/Donate'
import Apply from './components/Apply/Apply'
import Highway from './components/Highway/Highway';

function App() {
  return (
    <>
      <Switch >
        <Route
          exact path='/'
          render={props => <HomePage />}
        />
        <Route
          path='/about'
          render={props => <AboutPage />}
        />
        <Route
          path='/recipients'
          render={props => <Recipients />}
        />
        <Route
          path='/board'
          render={props => <BoardMembers />}
        />
        <Route
          path='/donate'
          render={props => <Donate/>}
          />
        <Route
          path='/apply'
          render={props => <Apply />}
          />
        <Route 
          path='/highway'
          render={props=> <Highway />}
          />
      </Switch>

    </>
  );
}

export default withRouter(App);
