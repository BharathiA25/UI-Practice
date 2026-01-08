import React, { useState } from 'react'
import AppButton from '../common/AppButton'
import InputField from '../common/InputField'
import { Box, Typography } from '@mui/material'
import { useFormik } from "formik";

function SignupForm() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log("Signup Data:", values);
        },
    });
    return (
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
            {/* Name */}
            <InputField
                placeholder="Full Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
            />

            {/* Email */}
            <InputField
                placeholder="Email Address"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
            />

            {/* Password */}
            <InputField
                placeholder="Password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
            />

            {/*Policy*/}
            <Typography variant='body2'
                sx={{
                    width: 228,
                    color: "text.secondary",
                }}
            >
                You are agreeing to the{" "}
                <Box component="span" sx={{ color: 'primary.main', cursor: "pointer" }}>
                    Terms of Services
                </Box>{" "}
                and{" "}
                <Box component="span" sx={{ color: 'primary.main', cursor: "pointer" }}>
                    Privacy Policy
                </Box>
            </Typography>
            {/* Submit */}
            <AppButton
                type="submit"
                variant="contained"
                fullWidth
                disabled={formik.isSubmitting}
            >
                Get Started
            </AppButton>
        </Box>
    )
}

export default SignupForm
