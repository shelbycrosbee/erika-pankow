import React from 'react';
import './App.css';
import Header from './components/Navigation/Header'
import AboutPage from './components/About/AboutPage'
import HomePage from './components/HomePage'
import { Switch, Route, withRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Switch >
        <Route
          exact path='/'
          render={props => <HomePage/>}
        />
        <Route
          path='/about'
          render={props => <AboutPage />}
        />
      </Switch>
      
    </>
  );
}

export default withRouter(App);
