import React from 'react'
import { Button } from '@mui/material'
function CommonButton({Buttoncolor, ButtonName, Textcolor}) {
    const isOutlined = Buttoncolor === 'none';
  return (
    <Button
      variant={isOutlined ? 'outlined' : 'contained'}
      sx={{
        height : '32px',
        width:'auto',
        backgroundColor : isOutlined ? "transparent" : Buttoncolor,
        color : Textcolor 
      }}>
    {ButtonName}
    </Button>
  )
}

export default CommonButton
