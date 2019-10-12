import React from 'react';
import { Menu, Button, MenuItem } from '@material-ui/core';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <PopupState >
      {popupState => (
        <React.Fragment  onClick={handleClick}>
          <b variant="contained" 
          position="below"
          {...bindTrigger(popupState)}
         >
            About
          </b>
          <Menu {...bindMenu(popupState)}>
            <Button onClick={popupState.close} href='/about'>Erika's Story</Button>
            <br/>
            <Button onClick={popupState.close} href='/recipients'>Recipients</Button>
            <br/>
            <Button onClick={popupState.close} href='/board'>Board Members</Button>
            <br/>
            <Button onClick={popupState.close} href='/highway'>Adopt a Highway</Button>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}


