import React from 'react'
import { Box } from '@mui/material'
import signupImage from "../../assets/Signup.png";
function EntryImage() {
    return (
        <Box
            flex={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ backgroundColor: "background.paper" }}
        >
            <Box
                component="img"
                src={signupImage}
                alt="Signup"
                sx={{
                    width: "90%",
                    height: "auto",
                    objectFit: "contain",
                }}
            />
        </Box>
    )
}

export default EntryImage
