import React from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
function AuthRedirect({ authMessage, authType }) {
    const navigate = useNavigate();
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
                onClick={()=> authType === "Sign up" ? navigate('/') : navigate('/login') }
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
