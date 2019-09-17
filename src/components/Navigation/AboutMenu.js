import React from 'react';
import { Menu, MenuItem} from '@material-ui/core';
import { Link } from 'react-router-dom'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <React.Fragment>
          <div variant="contained" {...bindTrigger(popupState)}>
            About
          </div>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close} ><Link to='/about'>The Foundation</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to='/recipients'>Recipients</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to='/board'>Board Members</Link></MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default MenuPopupState;
