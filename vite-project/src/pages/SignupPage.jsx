import React from "react";
import SignupForm from "../components/forms/SignupForm";
import { Box, Typography } from "@mui/material";
import ContentUi from "../components/common/ContentUi";
import AuthRedirect from "../components/common/AuthRedirect";
import EntryImage from "../components/common/EntryImage";

function SignupPage() {
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
                        <ContentUi heading={"Signup"} message={"Start your 30-day free trial."} />

                        <SignupForm />
                        <AuthRedirect authMessage={" Already a member?"} authType={"Sign in"} />

                    </Box>
                </Box>

                {/* Right Image */}
                <EntryImage />
            </Box>
        </Box>
    );
}

export default SignupPage;
