import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import GoogleImage from '../../assets/Googlee.png'
import FacebookImage from '../../assets/Facebook.png'
function SigninComponents({ image, alt, entrymessage }) {
    return (
        <Button
            variant='outlined'
            sx={{
                height: 46,
                borderRadius: "24px",
                backgroundColor: "background.paper",
                borderColor: "divider",
                opacity: 1,
                boxShadow: "none",
                "&:hover": {
                    backgroundColor: "background.hover",
                    boxShadow: "none"
                },
                "&.MuiButton-outlined": {
                    borderColor: "divider",
                },
                "&.MuiButton-outlined:hover": {
                    borderColor: "divider",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2
                }}
            >
                <img
                    src={image}
                    alt={alt}
                    style={{ width: 18, height: 18 }}
                />
                <Typography color='text.primary'>
                    {entrymessage}
                </Typography>
            </Box>
        </Button>
    )
}

export default SigninComponents
