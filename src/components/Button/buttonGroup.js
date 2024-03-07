import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import BtnTr from './transBtn';

export default function BtnGrps() {
  return (
    <ButtonGroup variant="text" aria-label="Basic button group">
      <BtnTr name="one"></BtnTr>
      <BtnTr name="one"></BtnTr>
      <BtnTr name="one"></BtnTr>
    </ButtonGroup>
  );
}
