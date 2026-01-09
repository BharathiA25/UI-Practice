import { Box, Typography } from '@mui/material'
import InputField from '../components/common/InputField'
import AppButton from '../components/common/AppButton';
import { useFormik } from "formik";
import {useNavigate} from 'react-router-dom'

function ForgotPage() {
    const navigate = useNavigate();
    const formik = useFormik({
            initialValues: {
                email: "",
            },
            onSubmit: (values) => {
                console.log("Forgot Data:", values);
            },
        });
  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',minHeight: "100vh",backgroundColor: "background.default"}}>
        <Box  
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          width: 730,
          height: 515,
          borderRadius: "30px",
          backgroundColor: "background.paper",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 6
        }}
          >
            <Typography variant='h4' sx={{mb:1, textAlign:'center'}}>Forgot password?</Typography>
            <Typography color='text.secondary'  sx={{mb:2}}>No worries, we’ll send you reset instruction.</Typography>
              <Box sx={{mb:2}}>
            <Typography sx={{mb:2}}>Email</Typography>    
            <InputField
                placeholder="Enter your email"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
            />
            </Box>
              <AppButton
                type="submit"
                fullWidth
                disabled={formik.isSubmitting}
            >
                Reset Password
            </AppButton>
            <Box onClick = {
                () => navigate('/login') 
            }
            sx={{color : 'primary.main',cursor:'pointer', mt:2,display : 'flex',justifyContent:'center'}} >Back to login</Box>
        </Box>
    </Box>
  )
}

export default ForgotPage
