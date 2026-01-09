import React, { useState } from 'react'
import AppButton from '../common/AppButton'
import InputField from '../common/InputField'
import { Box, Typography,Button } from '@mui/material'
import { useFormik } from "formik";
import GoogleImage from '../../assets/Googlee.png'
import FacebookImage from '../../assets/Facebook.png'
import SigninComponents from '../common/SigninComponents';
import { useNavigate } from 'react-router-dom';
function SigninForm() {
     const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log("SignIn Data:", values);
        },
    });
    const navigate = useNavigate();
  return (
      <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
            {/* Email */}
            <Box>
            <Typography sx={{mb:2}}>Email</Typography>    
            <InputField
                placeholder="Enter your email"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
            />
            </Box>
            {/* Password */}
            <Box>
             <Typography sx={{mb:2}}>Password</Typography>   
            <InputField
                placeholder=". . . . . . . . . . . . ."
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
            />
            <Typography 
            onClick ={
                ()=> navigate('/forgot-password')
            } 
            sx={{mt:2,textAlign:'right',cursor:'pointer',color:'primary.main'}}>Forgot password</Typography>
            </Box>
            {/* Submit */}
            <AppButton
                type="submit"
                variant="contained"
                fullWidth
                disabled={formik.isSubmitting}
            >
                Sign in
            </AppButton>
            <SigninComponents image={GoogleImage} alt={"GoogleImage"} entrymessage={"Sign in with Google"}/>
            <SigninComponents image={FacebookImage} alt={"FaceBookImage"} entrymessage={"Sign in with FaceBook"}/>

        </Box>
  )
}

export default SigninForm