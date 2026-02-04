import { Box, Typography } from "@mui/material"
function Notification({bgcolor, text}) {
  return (
   <Box sx={{height : '150px', width : '200px', bgcolor : bgcolor, display : 'flex', flexDirection : 'column', alignItems : 'center',justifyContent : 'center'}}>
                <Typography sx={{color : 'text.default'}} variant="h5">{text}</Typography>
                <Typography sx={{color : 'text.default'}} variant="h5">Notification</Typography>
    </Box>
  )
}

export default Notification
