import React from 'react'
import SigninForm from '../components/forms/SigninForm';
import ContentUi from "../components/common/ContentUi";
import AuthRedirect from "../components/common/AuthRedirect";
import EntryImage from "../components/common/EntryImage";
import { Box } from '@mui/material'

function SigninPage() {
  return (
       <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            sx={{ backgroundColor: "background.default" }}
        >
            {/* Main Card */}
            <Box
                display="flex"
                sx={{
                    width: 1279,
                    height: 824,
                    borderRadius: "30px",
                    backgroundColor: "background.paper",
                    boxShadow: "0px 0px 4px 0px #00000026",
                    overflow: "hidden",
                }}
            >
                {/* Left Content */}
                <Box
                    flex={1}
                    sx={{
                        px: 8,
                        py: 6,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: 'center'
                    }}
                >
                    <Box
                        sx={{
                            width: 330,
                            display: "flex",
                            flexDirection: "column",

                        }}
                    >
                        <ContentUi heading={"Login"} message={"How do i get started lorem ipsum dolor at?"} />

                        <SigninForm />
                        <AuthRedirect authMessage={"Dont’t have an account."} authType={"Sign up"} />

                    </Box>
                </Box>

                {/* Right Image */}
                <EntryImage />
            </Box>
        </Box>
  )
}

export default SigninPage
