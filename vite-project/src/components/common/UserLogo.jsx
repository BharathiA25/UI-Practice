import { Box, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function UserLogo({name, email, image}) {
  return (
    <Box sx={{  height : '50px',borderRadius : '8px', backgroundColor : 'primary.main', display : 'flex',justifyContent:'space-around'}}>
        <Box sx={{display:'flex', gap:'10px', alignItems : 'center',justifyContent:'center'}}>
            <img src={image} width={28} height={28} />
            <Box>
                <Typography  fontSize={12} sx={{color : 'text.default'}}>{name}</Typography>
                <Typography fontSize={12} sx={{color : 'text.default'}}>{email}</Typography>
            </Box>

        </Box>
        <Box>
            <MenuOutlinedIcon  sx={{color : 'text.default'}}  fontSize='small'/>
        </Box>

    </Box>
  )
}

export default UserLogo
