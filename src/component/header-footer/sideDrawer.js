import React from 'react';
import {Drawer ,List , ListItem } from '@material-ui/core';

const SideDrawer = ({open,onClose}) => {
  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={()=>onClose(false)}
    >
      <List component='nav'>
        <ListItem button onClick={()=> console.log('fsd')}>
          Event Starts in
        </ListItem>
        <ListItem button onClick={()=> console.log('fsd')}>
          Venue NFO
        </ListItem>
        <ListItem button onClick={()=> console.log('fsd')}>
          Highlights
        </ListItem>
        <ListItem button onClick={()=> console.log('fsd')}>
          Pricing
        </ListItem>
        <ListItem button onClick={()=> console.log('fsd')}>
          Location
        </ListItem>
      </List>
      
    </Drawer>
  );
};
export default SideDrawer;