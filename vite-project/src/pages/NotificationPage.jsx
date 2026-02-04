import { Box, Paper, Typography } from "@mui/material"
import AlertNotification from "../components/common/AlertNotification"
import Notification from "../components/common/Notification"
function NotificationPage() {
  return (
    <Box sx={{width:'100%', display : 'flex', flexDirection : 'column', alignItems : 'center', justifyContent : 'center', gap:5}}>
        <Paper elevation={6} sx={{p:4, width : '50%'}}>
        <Box>
            <Typography variant="h4">Alert</Typography>
        </Box>
        <Box sx={{mt:3}}>
           <AlertNotification bgcolor={"primary.shade"}/>
           <AlertNotification bgcolor={"primary.main"}/>
           <AlertNotification bgcolor={"darkblue"}/>
           <AlertNotification bgcolor={"danger"}/>
           <AlertNotification bgcolor={"status"}/>
           <AlertNotification bgcolor={"primary.shade"}/>
           <AlertNotification bgcolor={"text.secondary"}/>
           <AlertNotification bgcolor={"text.primary"}/>
        </Box>
        </Paper>
        <Paper elevation={6} sx={{p:4 ,width : '50%'}}>
            <Box sx={{p:2}}>
                <Typography variant="h4">Notification</Typography>
                <Typography sx={{color : 'text.secondary',mt:2}}>Notifications on this page use Toasts from Bootstrap. Read more details here.</Typography>
            </Box>
            <Box sx={{display : 'flex', p:4, gap:2}}>
                <Notification  bgcolor={"darkblue"} text={"Success"}/>
                <Notification  bgcolor={"status"} text={"Warning"}/>
                <Notification  bgcolor={"danger"} text={"Danger"}/>
                <Notification  bgcolor={"primary.main"} text={"Secondary"}/>
            </Box>
        </Paper>
    </Box>
  )
}

export default NotificationPage
