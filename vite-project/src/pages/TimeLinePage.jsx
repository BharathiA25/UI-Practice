import { Box, Paper, Typography } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import DescriptionIcon from '@mui/icons-material/Description';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TimeLineCard from '../components/common/TimeLineCard';
import paypal from '../assets/paypal.png'
function TimeLinePage() {
  return (
    <Box sx={{width : '100%', display : 'flex', justifyContent : 'space-around'}}>
    <Paper elevation={6} sx={{p:2, width : '40%'}}>
        <Typography sx={{p:'0px 4px 4px'}} variant='h4'>Timeline with dotted line</Typography>
        <TimeLineCard Icon={NotificationsIcon} IconColor={"primary.main"} Title={"$8900, Design changes"} DateAndTime={"12 Dec 9:00 PM"} ButtonCount={1} ButtonName1={"Design"} Buttoncolor1={"primary.main"} Textcolor1={"text.default"}/>
        <TimeLineCard Icon={SmartphoneIcon} IconColor={"status"} Title={"New order #1832412"} DateAndTime={"21 Dec 11 PM"} ButtonCount={2} ButtonName1={"ORDER"} Buttoncolor1={"status"} Textcolor1={"text.default"} ButtonName2={"#1832"} Buttoncolor2={"status"} Textcolor2={"text.default"}/>
        <TimeLineCard Icon={paypal}  Title={"Server payments for April"} DateAndTime={"21 DEC 9:34 PM"} ButtonCount={2} ButtonName1={"Server"} Buttoncolor1={"darkblue"} Textcolor1={"text.default"} ButtonName2={"Payment"} Buttoncolor2={"darkblue"} Textcolor2={"text.default"}/>
        <TimeLineCard Icon={DescriptionIcon} IconColor={"background.sidebar"} Title={"New card added for order #4395133"} DateAndTime={"20 Dec 2:20 AM"} ButtonCount={2} ButtonName1={"CARD"} Buttoncolor1={"background.sidebar"} Textcolor1={"text.default"} ButtonName2={"#439"} Buttoncolor2={"background.sidebar"} Textcolor2={"text.default"}/>
        <TimeLineCard Icon={VerifiedUserIcon} IconColor={"danger"} Title={"Unlock packages for development"} DateAndTime={"18 Dec 4:54 AM"} ButtonCount={1} ButtonName1={"Design"} Buttoncolor1={"danger"} Textcolor1={"text.default"}/>
        <TimeLineCard Icon={VerifiedUserIcon} IconColor={"primary.shade"} Title={"New message unread"} DateAndTime={"16 Dec"} ButtonCount={1} ButtonName1={"Design"} Buttoncolor1={"primary.shade"} Textcolor1={"text.default"}/>
 
    </Paper>
    <Paper elevation={6} sx={{p:2, width : '40%', bgcolor : 'text.primary'}}>
        <Typography sx={{color : 'text.default',p:'0px 4px 4px'}} variant='h4'>Timeline with dotted line</Typography>
        <TimeLineCard Icon={NotificationsIcon} IconColor={"primary.main"} bgcolor={true} Title={"$8900, Design changes"} DateAndTime={"12 Dec 9:00 PM"} ButtonCount={1} ButtonName1={"Design"} Buttoncolor1={"primary.main"} Textcolor1={"text.default"}/>
        <TimeLineCard Icon={SmartphoneIcon} IconColor={"status"} bgcolor={true} Title={"New order #1832412"} DateAndTime={"21 Dec 11 PM"} ButtonCount={2} ButtonName1={"ORDER"} Buttoncolor1={"status"} Textcolor1={"text.default"} ButtonName2={"#1832"} Buttoncolor2={"status"} Textcolor2={"text.default"}/>
        <TimeLineCard Icon={paypal} bgcolor={true} Title={"Server payments for April"} DateAndTime={"21 DEC 9:34 PM"} ButtonCount={2} ButtonName1={"Server"} Buttoncolor1={"darkblue"} Textcolor1={"text.default"} ButtonName2={"Payment"} Buttoncolor2={"darkblue"} Textcolor2={"text.default"}/>
        <TimeLineCard Icon={DescriptionIcon} IconColor={"background.sidebar"} bgcolor={true} Title={"New card added for order #4395133"} DateAndTime={"20 Dec 2:20 AM"} ButtonCount={2} ButtonName1={"CARD"} Buttoncolor1={"background.sidebar"} Textcolor1={"text.default"} ButtonName2={"#439"} Buttoncolor2={"background.sidebar"} Textcolor2={"text.default"}/>
        <TimeLineCard Icon={VerifiedUserIcon} IconColor={"danger"} bgcolor={true} Title={"Unlock packages for development"} DateAndTime={"18 Dec 4:54 AM"} ButtonCount={1} ButtonName1={"Design"} Buttoncolor1={"danger"} Textcolor1={"text.default"}/>
        <TimeLineCard Icon={VerifiedUserIcon} IconColor={"primary.shade"}bgcolor={true} Title={"New message unread"} DateAndTime={"16 Dec"} ButtonCount={1} ButtonName1={"Design"} Buttoncolor1={"primary.shade"} Textcolor1={"text.default"}/>
 
    </Paper>
    </Box>
  )
}

export default TimeLinePage
