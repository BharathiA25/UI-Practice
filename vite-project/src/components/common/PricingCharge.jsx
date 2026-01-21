import { Box, Button,Typography } from "@mui/material"
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function PricingCharge({type, description, button}) {
    const isOutlined = button === "Current Plan"
  return (
    <Box>
    <Box>
                <Typography variant="h4">{type}</Typography>
                <Typography>{description}</Typography>
            </Box>
            <Button  
            variant={isOutlined ? 'outlined' : 'contained'}
            sx={{height: '40px', width : '100%' , color : isOutlined? 'text.secondary' : 'text.default', backgroundColor : isOutlined? 'transparent' : 'primary.main',mt:2,mb:2}}>
                {button}
            </Button>
        {type === 'Free/Personal' && (
            <Box sx={{display : 'flex', flexDirection : 'column',gap:2}}>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxOutlineBlankIcon sx={{color : 'status'}}/>
                <Typography>Unlimited Projects</Typography>
            </Box>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxIcon sx={{color : 'status'}}/>
                <Typography>Share with 5 team members</Typography>
            </Box>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxOutlineBlankIcon sx={{color : 'status'}}/>
                <Typography>Sync across devices</Typography>
            </Box>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxIcon sx={{color : 'status'}}/>
                <Typography>API Access</Typography>
            </Box>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxOutlineBlankIcon sx={{color : 'status'}}/>
                <Typography>Complete Documentation</Typography>
            </Box>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxIcon sx={{color : 'status'}}/>
                <Typography>Integration help</Typography>
            </Box>
            </Box>
        )}

          {type === '$89/Professional' && (
            <Box sx={{display : 'flex', flexDirection : 'column',gap:2}}>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxOutlineBlankIcon sx={{color : 'status'}}/>
                <Typography>Everything in free plan</Typography>
            </Box>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxIcon sx={{color : 'status'}}/>
                <Typography>Unlimited projects</Typography>
            </Box>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxOutlineBlankIcon sx={{color : 'status'}}/>
                <Typography>Share with 5 team members</Typography>
            </Box>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxIcon sx={{color : 'status'}}/>
                <Typography>30 day version history</Typography>
            </Box>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxOutlineBlankIcon sx={{color : 'status'}}/>
                <Typography>Complete Documentation</Typography>
            </Box>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxIcon sx={{color : 'status'}}/>
                <Typography>Integration help</Typography>
            </Box>
            </Box>
        )}

           {type === 'Custom/Enterprise' && (
            <Box sx={{display : 'flex', flexDirection : 'column',gap:2}}>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxOutlineBlankIcon sx={{color : 'status'}}/>
                <Typography>Everything in Tree plan</Typography>
            </Box>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxIcon sx={{color : 'status'}}/>
                <Typography>Advanced security</Typography>
            </Box>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxOutlineBlankIcon sx={{color : 'status'}}/>
                <Typography>Custom contract</Typography>
            </Box>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxIcon sx={{color : 'status'}}/>
                <Typography>User provisioning ( SCIM)</Typography>
            </Box>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxOutlineBlankIcon sx={{color : 'status'}}/>
                <Typography>Complete Documentation</Typography>
            </Box>
            <Box sx={{display :'flex', gap : 2}}>
                <CheckBoxIcon sx={{color : 'status'}}/>
                <Typography>SAML SSO</Typography>
            </Box>
            </Box>
        )}
            </Box>
                    
  )
}

export default PricingCharge
