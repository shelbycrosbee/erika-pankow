import React from 'react';
import AboutPage from './components/About/AboutPage'
import HomePage from './components/Home/HomePage'
import { Switch, Route, withRouter } from 'react-router-dom'
import Recipients from './components/Recipients/Recipients';
import BoardMembers from './components/BoardMembers/BoardMembers';
import Donate from './components/About/Donate'
import Apply from './components/Apply/Apply'
import Highway from './components/Highway/Highway';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Switch >
        <Route
          exact path='/'
          render={props => <HomePage />}
        />
        <Route
          path='/about'>
          <AboutPage />}
          </Route>
        <Route
          path='/recipients'
          ><Recipients /></Route>
        <Route
          path='/donate'
         ><Donate/></Route>
        <Route
          path='/apply'
        ><Apply /></Route>
        <Route 
          path='/info'
        ><Highway /></Route>
      </Switch>

    </>
  );
}

export default withRouter(App);
