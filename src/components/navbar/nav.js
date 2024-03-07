import React from 'react'
import Avatar  from '@mui/material/Avatar'
import profile from "../../media/profile.png"
import BtnGrps from '../Button/buttonGroup'
import './nav.css'
function Nav(props) {
  return (
    <>
    <nav className='nav-bar'>
        <Avatar src={profile} name = "profile"></Avatar>
        <BtnGrps></BtnGrps>
    </nav>
    </>
  )
}

export default Nav