import React from 'react'
import { Box, Typography } from '@mui/material'
function AuthRedirect({ authMessage, authType }) {
    return (
        <Typography
            sx={{
                width: "228px",
                height: "30px",
                lineHeight: "100%",
                color: "text.secondary",
                mt: 2,
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
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
    )
}

export default AuthRedirect
