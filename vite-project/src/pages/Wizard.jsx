import { Box, Grid, Paper, Typography } from '@mui/material'
import { useState } from 'react'
import profile from '../assets/profile-photo.png'
import EditIcon from '@mui/icons-material/Edit';
import InputField from '../components/common/InputField';
import CommonButton from '../components/common/CommonButton';
import GroupIcon from '@mui/icons-material/Group';
function Wizard() {
    const [step , setStep] = useState(1)
    const handleAbout = () => setStep(1)
    const handleAccount = () =>setStep(2)
    const handleAddress = () =>setStep(3)
  return (
    <Box>
        <Box sx={{display : 'flex', alignItems :'center', justifyContent :'center',gap:0.5,cursor : 'pointer'}}>
        <Box onClick = {handleAbout} sx={{display :'flex', alignItems:'center', gap : 1, opacity : step === 1 ? '1' : '0.5' }}>
            <Box sx={{height:'24px', width : '24px', backgroundColor :'primary.main', color : 'text.default', borderRadius:'50%',display:'flex',alignItems:'center', justifyContent:'center'}}>1</Box>
            <Typography fontWeight={700} sx={{color :'primary.main'}}>About</Typography>
            <Box component='hr'sx={{width:'200px'}}/>
        </Box>
        
        <Box onClick = {handleAccount} sx={{display :'flex', alignItems:'center', gap : 1, opacity : step ===2 ? '1' : '0.5', cursor : 'pointer'}}>
            <Box sx={{height:'24px', width : '24px', backgroundColor :'primary.main', color : 'text.default', borderRadius:'50%',display:'flex',alignItems:'center', justifyContent:'center'}}>2</Box>
            <Typography fontWeight={700} sx={{color :'primary.main'}}>Account</Typography>
            <Box component='hr' sx={{width:'200px'}}/>
        </Box>
        <Box onClick = {handleAddress} sx={{display :'flex', alignItems:'center', gap : 1, opacity : step ===3 ? '1' : '0.5',cursor : 'pointer'}}>
            <Box sx={{height:'24px', width : '24px', backgroundColor :'primary.main', color : 'text.default', borderRadius:'50%',display:'flex',alignItems:'center', justifyContent:'center'}}>3</Box>
            <Typography fontWeight={700} sx={{color :'primary.main'}}>Address</Typography>
        </Box>
        </Box>
        <Box sx={{display : 'flex', alignItems : 'center' ,  justifyContent : 'center', mt:3}}>
            <Paper  elevation={3} sx={{height : 'auto', width : '50%', p:3}}>
                {step === 1 &&
                    <Box >
                        <Box>
                            <Box sx={{display : 'flex', flexDirection  :'column', justifyContent : 'center', alignItems : 'center', gap : 2, p:3}}>
                                <Typography fontWeight={600}> Let's start with the basic information</Typography>
                                <Box component='p' sx={{display :'flex', flexDirection : 'column', alignItems : 'center'}} >
                      <Box>  Let us know your name and email address. Use an address you don’t </Box>
                       <Box> mind other users contact you at </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{display : 'flex', alignItems : 'center', gap : 3}}>
                        <Box sx={{position :'relative'}}>
                        <Box component='img' src={profile} sx={{height : '100px', width : '100px'}}/>
                        <Box sx={{position : 'absolute', bottom : '15px',left :'70px'}}>
                        <Box sx={{height : '35px', width : '35px',borderRadius : '50%',display : 'flex', alignItems :'center', justifyContent:'center', backgroundColor : 'primary.main',cursor : 'pointer'}}>
                            <EditIcon sx={{color : 'text.default'}}/>
                        </Box>
                        </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography variant='h5'fontWeight={600}>Profile photo</Typography>
                                <Typography variant='h6' sx={{color : 'text.secondary'}}>This will be displayed on your profile.</Typography>
                            </Box>
                        </Box>
                        </Box>
                         <Box sx={{mt:2}}>
        <Grid container spacing={3} px={9}>  
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 }}>First name</Typography>
              <InputField
                 type="text"
                placeholder="Kame"/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 }}>Last name</Typography>
              <InputField
                 type="text"
                 placeholder="williamson"/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 }}>Email Address</Typography>
              <InputField
                 type="text"
                 placeholder="kamewilliamson@gmail.com"/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 }}>Date of Birth</Typography>
              <InputField
                 type="text"
                placeholder="25/01/2001"/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 }}>City</Typography>
              <InputField
                 type="text"
                placeholder="Berlin, Germany"/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 }}>Postal code</Typography>
              <InputField
                 type="text"
                placeholder="87532"/>
        </Grid>
     </Grid> 
                        </Box>
                        <Box sx={{mt : 3 , display : 'flex',justifyContent : 'flex-end'}}>
                            <CommonButton ButtonName={"Next"} Textcolor={"text.default"} Buttoncolor={"primary.main"}/>
                        </Box>
                     </Box>
                    }
                 {step === 2 &&
                    <Box >
                        <Box>
                            <Box sx={{display : 'flex', flexDirection  :'column', justifyContent : 'center', alignItems : 'center', gap : 2, p:3}}>
                                <Typography fontWeight={500}> What are you doing? (checkboxes)</Typography>
                                <Box component='p' sx={{display :'flex', flexDirection : 'column', alignItems : 'center'}} >
                      <Box>  Give us more detail about you. What do you enjoy doing in </Box>
                       <Box> your spare time? </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box >
                            <Grid container spacing={5} justifyContent={'center'}>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{height : 'auto', width : '100px', borderRadius : '8px', p:2, border : '1px solid black',display : 'flex', flexDirection : 'column', gap : 2}}>
                                        <GroupIcon sx={{height : '34px', width :'34px', backgroundColor : 'background.sidebar', color : 'primary.main', borderRadius : '8px',p:1}}/>
                                        <Typography variant='h4'>Design</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{height : 'auto', width : '100px', borderRadius : '8px', p:2, border : '1px solid black',display : 'flex', flexDirection : 'column', gap : 2}}>
                                        <GroupIcon sx={{height : '34px', width :'34px', backgroundColor : 'background.sidebar', color : 'primary.main', borderRadius : '8px',p:1}}/>
                                        <Typography variant='h4'>Develop</Typography>
                                    </Box>
                                </Grid>
                                 <Grid item xs={12} md={6}>
                                    <Box sx={{height : 'auto', width : '100px', borderRadius : '8px', p:2, border : '1px solid black',display : 'flex', flexDirection : 'column', gap : 2}}>
                                        <GroupIcon sx={{height : '34px', width :'34px', backgroundColor : 'background.sidebar', color : 'primary.main', borderRadius : '8px',p:1}}/>
                                        <Typography variant='h4'>Code</Typography>
                                    </Box>
                                </Grid>
                                 <Grid item xs={12} md={6}>
                                    <Box sx={{height : 'auto', width : '100px', borderRadius : '8px', p:2, border : '1px solid black',display : 'flex', flexDirection : 'column', gap : 2}}>
                                        <GroupIcon sx={{height : '34px', width :'34px', backgroundColor : 'background.sidebar', color : 'primary.main', borderRadius : '8px',p:1}}/>
                                        <Typography variant='h4'>Design</Typography>
                                    </Box>
                                </Grid>
                                 <Grid item xs={12} md={6}>
                                    <Box sx={{height : 'auto', width : '100px', borderRadius : '8px', p:2, border : '1px solid black',display : 'flex', flexDirection : 'column', gap : 2}}>
                                        <GroupIcon sx={{height : '34px', width :'34px', backgroundColor : 'background.sidebar', color : 'primary.main', borderRadius : '8px',p:1}}/>
                                        <Typography variant='h4'>Develop</Typography>
                                    </Box>
                                </Grid>
                                 <Grid item xs={12} md={6}>
                                    <Box sx={{height : 'auto', width : '100px', borderRadius : '8px', p:2, border : '1px solid black',display : 'flex', flexDirection : 'column', gap : 2}}>
                                        <GroupIcon sx={{height : '34px', width :'34px', backgroundColor : 'background.sidebar', color : 'primary.main', borderRadius : '8px',p:1}}/>
                                        <Typography variant='h4'>Code</Typography>
                                    </Box>
                                </Grid>
                                 <Grid item xs={12} md={6}>
                                    <Box sx={{height : 'auto', width : '100px', borderRadius : '8px', p:2, border : '1px solid black',display : 'flex', flexDirection : 'column', gap : 2}}>
                                        <GroupIcon sx={{height : '34px', width :'34px', backgroundColor : 'background.sidebar', color : 'primary.main', borderRadius : '8px',p:1}}/>
                                        <Typography variant='h4'>Design</Typography>
                                    </Box>
                                </Grid>
                                 <Grid item xs={12} md={6}>
                                    <Box sx={{height : 'auto', width : '100px', borderRadius : '8px', p:2, border : '1px solid black',display : 'flex', flexDirection : 'column', gap : 2}}>
                                        <GroupIcon sx={{height : '34px', width :'34px', backgroundColor : 'background.sidebar', color : 'primary.main', borderRadius : '8px',p:1}}/>
                                        <Typography variant='h4'>Develop</Typography>
                                    </Box>
                                </Grid>
                                 <Grid item xs={12} md={6}>
                                    <Box sx={{height : 'auto', width : '100px', borderRadius : '8px', p:2, border : '1px solid black',display : 'flex', flexDirection : 'column', gap : 2}}>
                                        <GroupIcon sx={{height : '34px', width :'34px', backgroundColor : 'background.sidebar', color : 'primary.main', borderRadius : '8px',p:1}}/>
                                        <Typography variant='h4'>code</Typography>
                                    </Box>
                                </Grid> 
                            </Grid>
                        </Box>
                        <Box sx={{mt : 3 , display : 'flex',justifyContent : 'flex-end'}}>
                            <CommonButton ButtonName={"Next"} Textcolor={"text.default"} Buttoncolor={"primary.main"}/>
                        </Box>
                     </Box>
                    }   
                   {step === 3 &&
                    <Box >
                        <Box>
                            <Box sx={{display : 'flex', flexDirection  :'column', justifyContent : 'center', alignItems : 'center', gap : 2, p:3}}>
                                <Typography fontWeight={500}> Are you living in nice area?</Typography>
                                <Box component='p' sx={{display :'flex', flexDirection : 'column', alignItems : 'center'}} >
                      <Box>  One thing I love about the later sunsets is the chance to go for a walk </Box>
                       <Box> through the neighborhood woods before dinner</Box>
                                </Box>
                            </Box>
                        </Box>                   
    <Box sx={{mt:2}}>
        <Grid container spacing={3} px={9}>  
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 }}>Street name</Typography>
              <InputField
                 type="text"
                placeholder="Soft"/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 }}>Street no</Typography>
              <InputField
                 type="text"
                 placeholder="197"/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 }}>City</Typography>
              <InputField
                 type="text"
                 placeholder="Berlin"/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 }}>Country</Typography>
              <InputField
                 type="text"
                placeholder="Germany"/>
        </Grid>
     </Grid> 
                        </Box>
                        <Box sx={{mt : 3 , display : 'flex',justifyContent : 'flex-end'}}>
                            <CommonButton ButtonName={"Next"} Textcolor={"text.default"} Buttoncolor={"primary.main"}/>
                        </Box>
                     </Box>
                    }    
            </Paper>
        </Box>
    </Box>
  )
}

export default Wizard
