import React from 'react';
import Avatar from '@mui/material/Avatar';
import profile from "../../media/profile.png";
import BtnTr from '../Button/transBtn';
import './nav.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
function Nav(props) {
  let phoneView = false;
  function isPhoneByScreenSize() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return screenWidth <= 768;
  }

  function isPhoneByUserAgent() {
    var userAgent = navigator.userAgent.toLowerCase();
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  }

  if (isPhoneByScreenSize() || isPhoneByUserAgent()) {
    phoneView = true;
  }

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <nav className='nav-bar'>
        {phoneView ? <Button variant='text' onClick={toggleDrawer(true)}><i className='material-icons'>menu</i></Button> : <></>}
        <h2 className='logo'>Quiz Quest</h2>
        {phoneView ? <></> : <div className='menu'>
          <BtnTr name="HOME"></BtnTr>
          <BtnTr name="About"></BtnTr>
          <BtnTr name="Dashboard"></BtnTr>
        </div>}
        <Avatar src={profile} name="profile"></Avatar>
      </nav>
      {phoneView ? <div className='sideNavContainer'>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div> : <></>}
    </>
  )
}

export default Nav