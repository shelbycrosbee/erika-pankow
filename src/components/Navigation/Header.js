import React from 'react';
import { AppBar, Toolbar, CssBaseline, IconButton, Button } from '@material-ui/core';
import AboutMenu from './AboutMenu';
import './index.css';
import logo from '../../images/logo.png'
import { withRouter } from 'react-router-dom'



class Header extends React.Component {

  render (){
    return(
    <React.Fragment  >
      <CssBaseline />
      <AppBar style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton style={{ color: "white" }} href={'/'}><img
            src={logo}
            alt="logo"
            className='logoStyle'
          /></IconButton>
          <a className="headerButtons"><AboutMenu /></a>
          <a href="apply" className="headerButtons"><b> Apply </b></a>
          <a href="/donate" className='headerButtons'> <b> Donate </b>
          </a>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
    }

}

export default withRouter(Header)
