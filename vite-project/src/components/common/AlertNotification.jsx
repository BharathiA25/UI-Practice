import { Box, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

function AlertNotification({bgcolor}) {
  return (
    <Box sx={{display : 'flex', justifyContent : 'space-between', p:2, bgcolor : bgcolor, color : 'text.default', borderRadius : '8px',m:2}}>
                <Typography>A simple primary alert with <Box component={"u"}>an example link.</Box>  Give it a click if you like.</Typography>
                <CloseIcon sx={{cursor : 'pointer'}}/>
    </Box>
  )
}

export default AlertNotification
