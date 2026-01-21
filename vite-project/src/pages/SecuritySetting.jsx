import { Box, Button, Paper, Typography } from '@mui/material'
import InputField from '../components/common/InputField'
import CircleIcon from '@mui/icons-material/Circle';
import CommonButton from '../components/common/CommonButton';
import Device from '../components/common/Device';
function SecuritySetting() {
    return (
        <Box>
            <Box>
                <Typography variant='h5'fontWeight={700}>Security Setting</Typography>
            </Box>
            <Box sx={{mt:10, display : 'flex', width : '100%', gap : 10}}>
                <Paper elevation={3} sx={{p:2, width : '60%'}}>
                    <Box sx={{display : 'flex', flexDirection : 'column' , gap : 1}}>
                        <Typography variant='h6' fontWeight={600}>Password</Typography>
                        <Typography sx={{color : 'text.secondary'}}>The Last Pass password generator creates random<br/>
                            passwords based on parameters set by you</Typography>
                    </Box>
                    <Box sx={{mt:3}}>
                        <Typography sx={{ mb: 2 }}>Current password</Typography>
                        <InputField
                            placeholder="Current Password"
                            type="text"
                            name="currentPage"
                        />
                    </Box >
                    <Box sx={{mt:3}}>
                        <Typography sx={{ mb: 2 }}>New password</Typography>
                        <InputField
                            placeholder="New Password"
                            type="text"
                            name="currentPage"
                        />
                    </Box>
                    <Box sx={{mt:3}}>
                        <Typography sx={{ mb: 2 }}>Confirm password</Typography>
                        <InputField
                            placeholder="Confirm Password"
                            type="text"
                            name="currentPage"
                        />
                    </Box>
                    <Box sx={{mt:3, backgroundColor : 'divider', width : 300,p:2, borderRadius : '8px'}}>
                        <Box sx={{display : 'flex', flexDirection : 'column',gap : 2}}>
                            <Typography variant='h6' fontWeight={500}>Rules for password</Typography>
                            <Typography sx={{color : 'text.secondary'}}>To create a new password, you have to meet all of the following requirements.</Typography>
                            <Box sx={{display :'flex', flexDirection :'column', gap : 2}}>
                               <Box sx={{display :'flex', alignItems : 'center', gap : 2}}>
                                <CircleIcon sx={{height : 12, width : 12}}/>
                                <Typography>Minimum 8 character</Typography>
                                </Box> 
                                <Box sx={{display :'flex', alignItems : 'center', gap : 2}}>
                                <CircleIcon sx={{height : 12, width : 12}}/>
                                <Typography>At least one special character</Typography>
                                </Box>
                                <Box sx={{display :'flex', alignItems : 'center', gap : 2}}>
                                <CircleIcon sx={{height : 12, width : 12}}/>
                                <Typography>At least one number</Typography>
                                </Box>
                                <Box sx={{display :'flex', alignItems : 'center', gap : 2}}>
                                <CircleIcon sx={{height : 12, width : 12}}/>
                                <Typography>Can”t be the same as a previous</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
                <Paper  elevation= {3} sx={{p:2,}}>
                    <Box sx={{display : 'flex', flexDirection : 'column',gap : 2}}>
                        <Typography variant='h5'fontWeight={600}>Devices</Typography>
                        <Typography sx={{color : 'text.secondary'}}>The Last Pass password generator creates random<br/> 
passwords based on parameters set by you</Typography>
                    </Box>
                    <Box sx={{mt:3,mb:3}}>
                        <CommonButton ButtonName={"Sign out from all devices"} Buttoncolor={"primary.main"} Textcolor={"text.default"}/>
                    </Box>
                    <hr />
                    <Box sx={{display :'flex', flexDirection : 'column', gap : 2, p:3}}>
                    <Device mobileName={"iPhone 11"} description={"London, UK-Oct12 at 2:30AM"}/>
                    <Device mobileName={"Galaxy 18"} description={"Berlain, Nov23 at 2:30pM"}/>
                    <Device mobileName={"Vivo y21"} description={"London, UK-Oct12 at 2:30AM"}/>
                    <Device mobileName={"iPhone 12"} description={"London, UK-Oct12 at 2:30AM"}/>
                    <Device mobileName={"Samsung"} description={"Karachi, PAK-Oct12 at 2:30AM"}/>
                    </Box>
                    <Box sx={{display : 'flex', alignItems :'center', justifyContent : 'center',m:10}}>
                        <Button sx={{backgroundColor : 'divider', color : 'text.primary'}}>Need help ?</Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}

export default SecuritySetting
