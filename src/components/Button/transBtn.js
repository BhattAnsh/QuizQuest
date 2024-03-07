import React from 'react';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
function BtnTr(props) {
    let light = "#9290C3";
    let dark = "#9290C3";
    const CustomButton = styled(Button)({
        color:light,

        ":hover":{
            color:dark,
        }
    })
  return (
    <>
    <CustomButton variant= "Text">{props.name}</CustomButton>
    </>
  )
}

export default BtnTr