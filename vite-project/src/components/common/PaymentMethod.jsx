import { Box, Typography } from "@mui/material"
function PaymentMethod({number, status, image, type, borderColor}) {
  return (
    <Box>
   <Box sx={{p:2, display : 'flex', alignItems : 'center', justifyContent : 'space-between', border : '1px solid ', borderColor : {borderColor} , borderRadius : '8px', width : '200px'}}>
        <Box sx={{display : 'flex', alignItems : 'center', gap : 1}}>
            <Box>   
            {status}
            </Box>
            <Box sx={{display : 'flex', flexDirection : 'column'}}>
            <Typography variant='h5'>{number}</Typography>
            <Box sx={{display : 'flex' , gap : 2}}>
                <Typography sx={{color : 'text.secondary'}}>{type}</Typography>
                <Typography>Edit</Typography>
            </Box>
            </Box>
        </Box>
        <Box 
        component='img'
        src={image}
        sx={{
            height : '35px',
            width : '36px'
        }}>

        </Box>
        </Box>
    </Box>
  )
}

export default PaymentMethod
