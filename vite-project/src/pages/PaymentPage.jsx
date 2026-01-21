import { Box, Button, Paper, Typography } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import AddBoxIcon from '@mui/icons-material/AddBox';
import visa from '../assets/Visa.png'
import paypal from '../assets/paypal.png'

import { useState } from 'react';
import PaymentMethod from '../components/common/PaymentMethod';
import InputField from '../components/common/InputField';
function PaymentPage() {
    const [openContact , setOpenContact] = useState (false);
    const [openPayment, setOpenPayment] = useState(false)
    const handleOpenorCloseContact = async() =>{
        setOpenContact(!openContact);
    }
    const handleOpenorClosePayment = async() =>{
        setOpenPayment(!openPayment)
    }
  return (
    <Box >
        <Box>
            <Typography variant='h5' fontWeight={600}>Payment Details</Typography>
        </Box>
        <Box sx={{display : 'flex',flexDirection:'column', alignItems : 'center', justifyContent : 'center', height : 'auto',width :'100%',mt:5,gap:5}}>
            <Paper elevation={3} sx={{height : 'auto', width : '70%',p:3}}>
                <Box sx={{ display : 'flex', justifyContent : 'space-between'}}>
                    <Typography variant='h5' fontWeight={600}>Contact</Typography>
                     {openContact ? <ArrowDropUpIcon onClick = {handleOpenorCloseContact} /> : <ArrowDropDownIcon onClick = {handleOpenorCloseContact}/>}
                </Box>
                { openContact &&(
                    <Box>
                        <hr />
                    </Box>
                )
                }
            </Paper>
            <Paper elevation={3} sx={{height : 'auto', width : '70%',p:3}}>
                <Box sx={{ display : 'flex', justifyContent : 'space-between'}}>
                    <Typography variant='h5' fontWeight={600}>Payment</Typography>
                     {openPayment ? <ArrowDropUpIcon onClick = {handleOpenorClosePayment} /> : <ArrowDropDownIcon onClick = {handleOpenorClosePayment}/>}
                </Box>
                { openPayment &&(
                    <Box>
                    <Box sx={{mt:3}}> 
                        <hr />
                    </Box>

                    <Box>
                        <Typography variant='h5'fontWeight={600} sx={{mt : 3, mb: 3}}>Payment method</Typography>
                    </Box>
                    <Box sx={{display : 'flex', justifyContent : 'space-between', alignItems : 'center', mb:4 }}>
                    <PaymentMethod number={'347809'} type={"Visa"} status={<CheckBoxIcon sx={{height : '40px', width : '46px', color : 'primary.main'}}/>} image={visa} borderColor={'primary.main'}/>
                     <PaymentMethod number={'347809'} type={"Paypal"} status={<CheckBoxOutlineBlankIcon sx={{height : '40px', width : '46px', color : 'text.secondary'}}/>} image={paypal} borderColor={'text.primary'}/>
                     <Box sx={{border : '1px solid' , borderColor : 'text.secondary', display : 'flex',flexDirection : 'column', alignItems : 'center', justifyContent : 'center', borderRadius : '8px', width : '100px', height : '100px'}}>
                        <Box>
                            <AddBoxIcon sx={{color : 'primary.main'}}/>
                        </Box>
                        <Typography sx={{color : 'primary.main'}}>New users</Typography>
                     </Box>
                     </Box>
                     <Box sx={{mt:2}}>
                        <Typography sx={{mb : 2}}>Card holder name</Typography>
                        <InputField placeholder="John Walden"/>
                     </Box>
                     <Box sx={{mt:2, display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                        <Box>
                        <Typography sx={{mb : 2}}>Billing address</Typography>
                        <InputField placeholder="Germany"/>
                        </Box>
                        <Box>
                            <ArrowDropDownIcon/>
                        </Box>
                     </Box>
                     <Box sx={{mt : 2, display : 'flex', justifyContent : 'space-between', alignItems :'center'}}>
                        <Box>
                        <Typography sx={{mb : 2}}>Zip Code</Typography>
                        <InputField placeholder="6789123"/>
                        </Box>
                        <Box>
                         <Typography sx={{mb : 2}}>City</Typography>
                        <InputField placeholder="Berlain"/>   
                        </Box>
                     </Box>
                     <Box sx={{mt : 2, display : 'flex', alignItems :'center', gap : 2}}>
                        <CheckBoxIcon sx={{color : 'primary.main'}}/>
                        <Typography>Invoice Address</Typography>
                     </Box>
                     <Button fullWidth sx={{backgroundColor : 'primary.main', color : 'text.default',mt:3}}>
                        Pay $67.00
                     </Button>
                    </Box>
                )
                }
            </Paper>
        </Box>
    </Box>
  )
}

export default PaymentPage
