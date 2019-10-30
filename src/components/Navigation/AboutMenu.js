import React from 'react';
import { Menu, Button } from '@material-ui/core';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import './index.css'

export default function SimpleMenu() {
  const [ setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };


  return (
    <PopupState >
      {popupState => (
        <React.Fragment  onClick={handleClick}>
          <b variant="contained" 
          position="below"
          {...bindTrigger(popupState)}
          // className="aboutTag"
         >
            About
          </b>
          <Menu {...bindMenu(popupState)}>
            <Button onClick={popupState.close} href='/about'  className="menuButtons">Erika's Story</Button>
            <br/>
            <Button onClick={popupState.close} href='/recipients'  className="menuButtons">Recipients</Button>
            <br/>
            <Button onClick={popupState.close} href='/info'  className="menuButtons">The Foundation</Button>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}


