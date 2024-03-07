import React from 'react';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
function BtnP(props) {
  let dark = "#9290C3";
  let light = "#1B1A55";
    const CustomButton = styled(Button)({
        background:light,

        ":hover":{
            backgroundColor:dark,
            color:"black",
        }
    })
  return (
    <>
    <CustomButton variant= "contained" color = "primary">{props.name}</CustomButton>
    </>
  )
}

export default BtnP