import React from 'react'
import { Box, Typography } from '@mui/material'
function AuthRedirect({ authMessage, authType }) {
    return (
        <Box sx={{
        mt: 2,
        width: "100%",
        display: "flex",
        justifyContent: authType === "Sign up" ? "center" : "flex-start",
      }}>
        <Typography sx={{
          lineHeight: "100%",
          color: "text.secondary",
        }}
        >
            {authMessage}{" "}
            <Box
                component="span"
                sx={{
                    color: "primary.main",
                    cursor: "pointer",
                    ml: "2px",
                }}
            >
                {authType}
            </Box>
        </Typography>
        </Box>
    )
}

export default AuthRedirect
