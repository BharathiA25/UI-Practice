import React from 'react'
import { Button } from '@mui/material'
function AppButton({ children, ...props }) {
  return (
    <Button
      variant="contained"
      sx={{
        width: 330,
        height: 46,
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