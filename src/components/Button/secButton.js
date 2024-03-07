import React from 'react';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
function BtnS(props) {
    let dark = "#9290C3";
    let light = "#1B1A55";
    const CustomButton = styled(Button)({
        color: dark,
        borderColor: dark,
        ":hover":{
            backgroundColor: light,
            color:"white",
            borderColor:light,
        }
    })
  return (
    <>
    <CustomButton variant= "outlined">{props.name}</CustomButton>
    </>
  )
}

export default BtnS