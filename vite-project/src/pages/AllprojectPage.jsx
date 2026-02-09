import { Box, Paper, Typography } from '@mui/material'
import pic11 from '../assets/pic11.png'
import PS from '../assets/PS.png'
import CommonButton from '../components/common/CommonButton'
import ProjectComponent from '../components/common/ProjectComponent'
import logo1 from '../assets/logos_adobe-incopy.png'
import logo2 from '../assets/logos_slack-icon.png'
import logo3 from '../assets/logos_linkedin-icon.png'
import logo4 from '../assets/logos_adobe-illustrator.png'
function AllprojectPage() {
  return (
    <Paper sx={{p:2}}>
        <Box sx={{display : 'flex', alignItems : 'center', justifyContent : 'space-between'}}>
        <Box sx={{display : 'flex', alignItems : 'center', gap : 1}}>
            <Box component={"img"} src={pic11} sx={{height : '30px'}} />
            <Box>
                <Typography sx={{fontSize : '12px'}}>Sayo Kravits</Typography>
                <Typography sx={{fontSize : '10px', color : 'text.secondary'}}>Public Relations</Typography>
            </Box>
        </Box>
        <Box sx={{display : 'flex', alignItems : 'center', gap : 2}}>
            <CommonButton  ButtonName={"App"} Buttoncolor={"primary.main"} Textcolor={"text.default"}/>
            <CommonButton  ButtonName={"Messages"} Textcolor={"primary.main"} Buttoncolor={"text.default"}/>
            <CommonButton  ButtonName={"Settings"} Textcolor={"primary.main"} Buttoncolor={"text.default"}/>
        </Box>
        </Box>
        <Paper elevation={6} sx={{mt:2}}>
            <Box sx={{bgcolor : 'divider', p:2, borderRadius : '8px 8px 0px 0px'}}>
                <Typography sx={{fontSize : '14px'}}>Some of Our Awesome projects</Typography>
            </Box>
            <Box sx={{p:2, display : 'flex', flexDirection : 'column', gap : 2}}>
                <Box sx={{display : 'flex', alignItems :'center', justifyContent : 'space-around'}}>
                <ProjectComponent title={"Design tool"} image={logo1} imageBG={'litesandal'} description={"Constantly growing. We’re constantly making mistakes from which we learn and improve"} participantCount={'10'} date={'02.08.22'}/>
                <ProjectComponent title={"Premium Support"} image={PS} imageBG={'liteblueshade'} description={"Pink is obviously a better color. Everyone born confident and everything taken away."} participantCount={'23'} date={'07.08.22'}/>
                <ProjectComponent title={"Slack Bot"} image={logo2} imageBG={'literose'} description={"If everything I did failed which it dosen’t Ithink that it actually succeeds."} participantCount={'11'} date={'10.08.22'}/>
                </Box>
                <Box sx={{display : 'flex', alignItems :'center', justifyContent : 'space-around'}}>
                <ProjectComponent title={"Developer First"} image={logo3} imageBG={'indeed'} description={"For standing out. But the time is now to be okay to be the greatest you."} participantCount={'30'} date={'20.08.22'}/>
                <ProjectComponent title={"Looking great"} image={logo4} imageBG={'paleorange'} description={"You have the opportunity to play this game of life you need to appreciate every moment."} participantCount={'30'} date={'20.08.22'}/>
                <ProjectComponent title={"Premium Support"} image={PS} imageBG={'liteblueshade'} description={"Pink is obviously a better color. Everyone born confident and everything taken away."} participantCount={'23'} date={'07.08.22'}/>
                </Box>
                <Box sx={{display : 'flex', alignItems :'center', justifyContent : 'space-around'}}>
                <ProjectComponent title={"Looking great"} image={logo4} imageBG={'paleorange'} description={"You have the opportunity to play this game of life you need to appreciate every moment."} participantCount={'30'} date={'20.08.22'}/>    
                <ProjectComponent title={"Design tool"} image={logo1} imageBG={'litesandal'} description={"Constantly growing. We’re constantly making mistakes from which we learn and improve"} participantCount={'10'} date={'02.08.22'}/>
                <Paper elevation={6} sx={{ p:2, height : '200px', width : '300px', display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
                    <Typography sx={{fontSize : '14px', color : 'text.secondary'}}>New project</Typography>
                </Paper>
                </Box>
            </Box>
        </Paper>
    </Paper>
  )
}

export default AllprojectPage
