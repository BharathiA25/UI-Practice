import { Box, Typography } from '@mui/material'
import React from 'react'
import CommonButton from './CommonButton'

function SettingsDetail() {
  return (
    <Box>
        <Box>
            <Typography variant='h4'>Setting Details</Typography>
        </Box>
        <Box sx={{display : 'flex', justifyContent : 'space-between'}}>
            <Typography sx={{color : 'text.secondary'}}>Update your photo and personal details here.</Typography>
            <Box>
                <CommonButton ButtonName={"Cancel"} Buttoncolor={"text.secondary"} Textcolor={"text.primary"}/>
                <CommonButton ButtonName={"Save"} Buttoncolor={"text.defaul"} Textcolor={"primary.main"}/>
            </Box>
        </Box>
    </Box>
  )
}

export default SettingsDetail
