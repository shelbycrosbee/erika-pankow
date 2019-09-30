import React from 'react';
import { Menu, Button } from '@material-ui/core';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


function MenuPopupState() {
  return (
    <PopupState >
      {popupState => (
        <React.Fragment>
          <div variant="contained" {...bindTrigger(popupState)}>
            About
          </div>
          <Menu {...bindMenu(popupState)}>
            <Button onClick={popupState.close} href='/about'>The Foundation</Button>
            <br/>
            <Button onClick={popupState.close} href='/recipients'>Recipients</Button>
            <br/>
            <Button onClick={popupState.close} href='/board'>Board Members</Button>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default MenuPopupState;
