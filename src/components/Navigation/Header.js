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
          <Button style={{ color: "white" }}><AboutMenu /></Button>
          <Button style={{ color: "white" }} href="/donate"> Donate
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
    }

}

export default withRouter(Header)
