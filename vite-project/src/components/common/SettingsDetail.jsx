import { Box, Typography } from '@mui/material'
import CommonButton from './CommonButton'

function SettingsDetail() {
  return (
    <Box sx={{display : 'flex', alignItems : 'center', justifyContent : 'space-between'}}>
        <Box >
            <Typography variant='h4'>Setting Details</Typography>
            <Typography sx={{color : 'text.secondary', mt:2}}>Update your photo and personal details here.</Typography>
         </Box>   
            <Box sx={{display : 'flex', gap:2, p:3}}>
                <CommonButton ButtonName={"Cancel"} Buttoncolor={"text.default"} Textcolor={"text.primary"} />
                <CommonButton ButtonName={"Save"} Buttoncolor={"primary.main"} Textcolor={"text.default"}/>
            </Box>
    </Box>
  )
}

export default SettingsDetail
