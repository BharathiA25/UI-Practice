import React from 'react'
import { Box, Typography } from '@mui/material'
function ContentUi({ heading, message }) {
    return (
        <Box>
            <Typography variant='h4'
                sx={{
                    lineHeight: "100%",
                    mb: 1,
                }}
            >
                {heading}
            </Typography>

            <Typography
                sx={{
                    color: "text.secondary",
                    mb: 2,
                }}
            >
                {message}
            </Typography>
        </Box>
    )
}

export default ContentUi
