import React, { useState } from "react";
import { TextField, IconButton, InputAdornment, Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
function InputField({ placeholder, type = "text", iconname, ...props }) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    return (
        <TextField
            fullWidth
            placeholder={placeholder}
            type={isPassword && showPassword ? "text" : type}
            InputProps={{
                startAdornment :
                       <InputAdornment position="start">
                        <IconButton>
                       {iconname === "search" && <SearchRoundedIcon/> }
                       {iconname === "calender" && <CalendarMonthIcon/>}
                        </IconButton>
                    </InputAdornment>,
                endAdornment: isPassword ? (
                    <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ) : null,
            }}
            {...props}
            sx={{
                width: 330,
                // Root input container
                "& .MuiOutlinedInput-root": {
                    height: 46,
                    backgroundColor: "background.input",

                    // Default border
                    "& fieldset": {
                        borderColor: "border.default",
                    },

                    // Hover border
                    "&:hover fieldset": {
                        borderColor: "border.default",
                    },

                    // Focus border (prevent blue)
                    "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                        borderWidth: 1,
                    },
                },
            }}
        />

    )
}

export default InputField