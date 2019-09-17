import React from 'react';
import  { AppBar, Toolbar, CssBaseline, IconButton } from '@material-ui/core';
import AboutMenu from './AboutMenu';
import './index.css';




export default function Header(props) {
  return (
    <React.Fragment  >
      <CssBaseline />
        <AppBar style={{backgroundColor:'black'}}>
          <Toolbar>
            <IconButton style={{color:"white"}} href={'/'}>Erika Pankow Scholarship Fund</IconButton>
           <AboutMenu />
          </Toolbar>
        </AppBar>

      <Toolbar />
    </React.Fragment>
  );
}
