import { Search } from '@mui/icons-material'
import { Box, TextField, Typography } from '@mui/material'

function ToolBar({name,subname}) {
  return (
    <Box sx={{
        height : 46,
        width : '50%',
        gap : '100px',
        display : 'flex',
        justifyContent : 'space-around',
        alignItems : 'center'

    }}>
        <Typography variant='h4' color='primary.main'>{name}{" "}/{" "}{subname}</Typography>
        <TextField 
        placeholder = "Search anything here..."
        sx={{
            width : 330,
            "& .MuiOutlinedInput-root":{
                height : 46,
                borderRadius : "30px"
            },
            border : "1px",
            borderColor : "divider",
        }}
        InputProps={{
            endAdornment : <Search sx={{height : 15, width : 15 , left : '302px', gap : '10px'}}/>
        }}/>
    </Box>
  )
}

export default ToolBar
