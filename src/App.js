import React from 'react';
import './App.css';
import Header from './components/Navigation/Header'
import AboutPage from './components/About/AboutPage'
import HomePage from './components/Home/HomePage'
import { Switch, Route, withRouter } from 'react-router-dom'
import Recipients from './components/Recipients/Recipients';
import BoardMembers from './components/BoardMembers/BoardMembers';
import Donate from './components/About/Donate'

function App() {
  return (
    <>
      <Header />
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
      </Switch>

    </>
  );
}

export default withRouter(App);
