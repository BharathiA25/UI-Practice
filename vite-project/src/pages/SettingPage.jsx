import { Box, Paper, Typography,Grid } from '@mui/material'
import InputField from '../components/common/InputField'; 
import SettingsDetail from '../components/common/SettingsDetail'
import CloudDownloadSharpIcon from '@mui/icons-material/CloudDownloadSharp';
import Google from '../assets/Google.png'
import { useFormik } from 'formik'
import CommonButton from '../components/common/CommonButton';

function SettingPage() {
    const formik = useFormik({
            initialValues: {
                firstName: "",
                lastName: "",
                emailAddress : "",
                userName : "",
                phoneNo:"",
                city:"",
                countryName : "",
                zipCode : "",
                bio:"",
                timeZone : "",
            },
        });
  return (
    <Box>
        <Box>
            <SettingsDetail/>
        </Box>
        <Box sx={{display : 'flex', gap :2 }}>
            <Box>
                <Paper elevation={2} sx={{height:'auto', width : 'auto',color : 'text.secondary'}}>
                <Box sx={{p:2}}>
                    <Typography variant='h5' sx={{color :'text.primary'}}>Personal information</Typography>
                </Box>
                <hr />
                <Box sx={{mt:3}}>
    <Grid container spacing={3} px={12}>  
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 , color :'text.primary'}}>First Name</Typography>
              <InputField
                 type="text"
                name="fullName"
                placeholder="Enter first name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
      />
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 ,color :'text.primary'}}>Last Name</Typography>
              <InputField
                 type="text"
                 placeholder="Enter last name"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
      />
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 , color :'text.primary'}}>Email Address</Typography>
              <InputField
                 type="text"
                 placeholder="Enter email Address"
                name="emailAddress"
                value={formik.values.emailAddress}
                onChange={formik.handleChange}
      />
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2, color :'text.primary' }}>username</Typography>
              <InputField
                 type="text"
                 placeholder="Enter user name"
                name="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
      />
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2, color :'text.primary' }}>Phone No</Typography>
              <InputField
                 type="text"
                 placeholder="Enter phone no"
                name="phoneNo"
                value={formik.values.phoneNo}
                onChange={formik.handleChange}
      />
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 , color :'text.primary'}}>City</Typography>
              <InputField
                 type="text"
                 placeholder="Enter your city"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
      />
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2,color :'text.primary' }}>Country Name</Typography>
              <InputField
                 type="text"
                 placeholder="Enter country name"
                name="countryName"
                value={formik.values.countryName}
                onChange={formik.handleChange}
      />
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2,color :'text.primary' }}>Zip code</Typography>
              <InputField
                 type="text"
                 placeholder="Enter zip code"
                name="zipCode"
                value={formik.values.zipCode}
                onChange={formik.handleChange}
      />
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{mb:2,color :'text.primary'}}>Bio
            <Box component="span" sx={{color :'text.secondary'}}>
            (Write a short introduction)
            </Box>
            </Typography>
              <InputField
                 type="text"
                 placeholder="Normal text"
                name="emailAddress"
                value={formik.values.bio}
                onChange={formik.handleChange}
      />
        </Grid>
        <Grid item xs={24} md={12}>
            <Box sx={{border : '1px solid text.secondary', p:3, backgroundColor : 'text.secondary',borderRadius:'8px'}}>
                <Typography sx={{color : 'text.default'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente, rem iste laboriosam nesciunt vero autem odio. Illo tempore sunt nam explicabo voluptate impedit dolor qui veritatis? Aliquid, nulla optio.</Typography>
                </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{mb:2}}>
                <Typography sx={{mb:2, color :'text.primary'}}>Timezone</Typography>
                <InputField
                type='text'
                placeholder='Pacific Standart Time'
                name="timeZone"
                value={formik.values.timeZone}
                onChange={formik.handleChange}
                />
                </Grid>
            </Grid>    
                </Box>
                </Paper>
             </Box>
            <Box sx={{display :'flex', flexDirection : 'column', gap :2}}>
                <Paper elevation={2} sx={{height:'auto', width : '40vw',color : 'text.secondary'}}>
                <Box sx={{p:2}}>
                    <Typography variant='h6' sx={{color :'text.primary'}}>Your Photo</Typography>
                </Box>
                <hr />
                <Box sx={{display : 'flex', p:3, alignItems : 'center', gap:2}}>
                    <Box>
                        <img height={50} width={50} src='http://placeholder.com' />
                    </Box>
                    <Box>
                    <Box>
                        <Typography sx={{color :'text.primary'}}>Edit your photo</Typography>
                    </Box>
                    <Box sx={{display :'flex', gap : 2}}>
                        <Typography sx={{color : 'text.secondary'}}>Delete</Typography>
                        <Typography sx={{color : 'primary.main'}}>Update</Typography>
                    </Box>
                    </Box>
                </Box>
    <Box  sx={{  borderRadius:'8px',p:2 }}>
            <Box  sx={(theme)  =>({
                display : 'flex', flexDirection :'column', justifyContent : 'center', alignItems :'center',m:2,p:8, borderRadius : '8px', border : '4px solid transparent', borderImage : `repeating-linear-gradient(45deg,${theme.palette.primary.main} 0px 8px, transparent 8px 16px ) 1`,cursor : 'pointer'
            })}>
            <CloudDownloadSharpIcon sx={{color :'primary.main' }}/>
            <Typography> <Box 
                component="span"
                sx={{color : 'primary.main', cursor :'pointer'}}> Click to upload </Box>{" "} or drag and drop</Typography>
            <Typography>SVG, PNG, JPG or GIF</Typography>
            <Typography sx={{color : 'text.secondary'}}>(max, 800*400px)</Typography>
            </Box>
            <Box>
            </Box>

        </Box >
                </Paper>
                <Paper elevation={2} sx={{height:'auto', width : '40vw',color : 'text.secondary'}}>
                <Box sx={{display : 'flex',flexDirection :'column', gap : 2,p:3}}>   
               <Box sx={{display : 'flex', alignItems : 'center', justifyContent:'space-between'}}>     
                <Box
                component="img"
                src={Google}
                alt='Google'
                sx={{
                    width: "100px",
                    height: "auto",
                    objectFit: "contain",
                }}
    >

                </Box>
                <CommonButton ButtonName={"Connected"} Buttoncolor={"background.sidebar"} Textcolor={"primary.main"}/>
                </Box>
                <Typography sx={{color : 'text.secondary'}}>
                    Use Google to sign in to your<br/> account.
                    <Box 
                    component='span'
                    sx={{
                        color : 'primary.main'
                    }}>
                        Click here to learn more .
                    </Box>
                </Typography>
                </Box>
                </Paper>
            </Box>

        </Box>
    </Box>
  )
}

export default SettingPage
