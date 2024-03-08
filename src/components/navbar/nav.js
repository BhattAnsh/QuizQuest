import React from 'react'
import Avatar from '@mui/material/Avatar'
import profile from "../../media/profile.png"
// import BtnGrps from '../Button/buttonGroup'
import BtnTr from '../Button/transBtn'
import './nav.css'
import TemporaryDrawer from './sideNav'
function Nav(props) {
  return (
    <>
      <nav className='nav-bar'>
        <h2 className='logo'>Quiz Quest</h2>
        <div className='menu'>
        <BtnTr name="HOME"></BtnTr>
        <BtnTr name="About"></BtnTr>
        <BtnTr name="Dashboard"></BtnTr>
        </div>
        <Avatar src={profile} name="profile"></Avatar>

      </nav>
      <TemporaryDrawer></TemporaryDrawer>
    </>
  )
}

export default Nav