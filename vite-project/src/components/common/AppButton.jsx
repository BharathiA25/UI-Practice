import React from 'react'
import { Button } from '@mui/material'
function AppButton({ children, ...props }) {
  return (
    <Button
      variant="contained"
      sx={{
        height: 46,
        width:330,
        backgroundColor: "primary.main",
        "&:hover": {
          backgroundColor: "primary.dark",
        },
      }}
      {...props}>
      {children}
    </Button>
  )
}

export default AppButton