import { Box, Paper, Typography, Rating } from '@mui/material'
import CommonButton from '../components/common/CommonButton'
import Ellipse from '../assets/Ellipse 1854.png'
import Mastercard from '../assets/mastercard.png'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
function OrderListPage() {
  return (
    <Box>
        <Box sx={{display : 'flex', justifyContent : 'space-around'}}>
        <Box sx={{display : 'flex', alignItems : 'center', flex : 1}}>
            <Box sx={{display : 'flex', gap : 2, alignItems : 'center'}}>
                <Box sx={{height : '25px', width : '25px', borderRadius : '50%', display : 'flex', alignItems : 'center', justifyContent : 'center', bgcolor : 'primary.main'}}> <Typography sx={{color : 'text.default'}}> 1 </Typography> </Box>
                <Box><Typography fontWeight={700} sx={{color : 'primary.main'}}>Order received</Typography></Box>
            </Box>
            <Box sx={{height : '1px',flexGrow : 1, bgcolor : 'divider',ml:1,mr:1}}/>
        </Box>
         <Box sx={{display : 'flex', alignItems : 'center', flex : 1}}>
            <Box sx={{display : 'flex', gap : 2, alignItems : 'center'}}>
                <Box sx={{height : '25px', width : '25px', borderRadius : '50%', display : 'flex', alignItems : 'center', justifyContent : 'center', bgcolor : 'primary.main'}}> <Typography sx={{color : 'text.default'}}> 2 </Typography> </Box>
                <Box><Typography fontWeight={700} sx={{color : 'primary.main'}}>Order generate</Typography></Box>
            </Box>
            <Box sx={{height : '1px',flexGrow : 1, bgcolor : 'divider',ml:1,mr:1}}/>
        </Box>
           <Box sx={{display : 'flex', alignItems : 'center', flex : 1}}>
            <Box sx={{display : 'flex', gap : 2, alignItems : 'center'}}>
                <Box sx={{height : '25px', width : '25px', borderRadius : '50%', display : 'flex', alignItems : 'center', justifyContent : 'center', bgcolor : 'primary.main'}}> <Typography sx={{color : 'text.default'}}> 3 </Typography> </Box>
                <Box><Typography fontWeight={700} sx={{color : 'primary.main'}}>Order transmited</Typography></Box>
            </Box>
            <Box sx={{height : '1px',flexGrow : 1, bgcolor : 'divider',ml:1,mr:1}}/>
        </Box>
            <Box sx={{display : 'flex', gap : 2, alignItems : 'center'}}>
                <Box sx={{height : '25px', width : '25px', borderRadius : '50%', display : 'flex', alignItems : 'center', justifyContent : 'center', bgcolor : 'primary.main'}}> <Typography sx={{color : 'text.default'}}> 4 </Typography> </Box>
                <Box><Typography fontWeight={700} sx={{color : 'primary.main'}}>Order delivered</Typography></Box>
            </Box>
        </Box>
        <Paper elevation={6} sx={{p:2}}>
            <Box sx={{display : 'flex', justifyContent : 'space-between'}}>
             <Box>
            <Typography variant='h5'>Order details</Typography>
            <Box>
                <Box sx={{display : 'flex', gap : 2,mt:3}}>
                    <Typography>Order no:</Typography>
                    <Typography>EL-5414587</Typography>
                </Box>
                <Box sx={{display : 'flex', gap : 2,mt:3}}>
                    <Typography>From</Typography>
                    <Typography>25 Dec, 2022</Typography>
                </Box>  
                <Box sx={{display : 'flex', gap : 2, mt:3}}>
                    <Typography>Code:</Typography>
                    <Typography>EL005</Typography>
                </Box>
            </Box>
            </Box>
            <Box>
                <CommonButton ButtonName={"Invoice"} Buttoncolor={"primary.main"} Textcolor={"text.default"}/>
            </Box>
            </Box>
            <Box sx={{display : 'flex', gap : 2}}>
            <Box sx={{mt : 2}}>
                <Typography variant='h5'>Product detail</Typography>
                <Paper elevation={3} sx={{m:2, width : '400px', height : '150px'}}>
                <Box sx={{display : 'flex', justifyContent :'space-between',p : 2}}>
                    <Box sx={{display : 'flex', gap : 2}}>
                        <Box component={"img"} src={Ellipse} sx={{height : '50px', width : '50px'}} />
                        <Box>
                            <Typography variant='h5'>Camera</Typography>
                            <Typography sx={{color : 'text.secondary', mt:1}}>$200</Typography>
                            <Typography sx={{color : 'text.secondary',mt:1}}>Order was delivered 2 days ago</Typography>
                            <Typography sx={{color : 'text.secondary',mt:1}}>Delivered</Typography>
                        </Box>
                    </Box>
                    <Box sx={{height : '20px',width : '20px', bgcolor : 'divider', borderRadius : '50%', display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
                    <QuestionMarkIcon sx={{color : 'text.default', height : '15px'}} />
                    </Box>
                </Box>
                </Paper>
            </Box>

             <Box sx={{mt : 2}}>
                <Typography variant='h5'>Billing Information</Typography>
                <Paper elevation={3} sx={{m:2, width : '400px', height : '150px'}}>
                <Box sx={{display : 'flex', justifyContent :'space-between',p : 2}}>
                    <Box>
            <Typography variant='h5'>Oliver Liam</Typography>
            <Box>
                <Box sx={{display : 'flex', gap : 2,mt:1}}>
                    <Typography>Company Name :</Typography>
                    <Typography>Viking Burrito</Typography>
                </Box>
                <Box sx={{display : 'flex', gap : 2,mt:1}}>
                    <Typography>Email Address :</Typography>
                    <Typography>Oliver.viking@burrito.com</Typography>
                </Box>  
                <Box sx={{display : 'flex', gap : 2, mt:1}}>
                    <Typography>VAT number :</Typography>
                    <Typography>FRB1235476</Typography>
                </Box>
            </Box>
            </Box>
                    <Box sx={{height : '20px',width : '20px', bgcolor : 'divider', borderRadius : '50%', display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
                    <QuestionMarkIcon sx={{color : 'text.default', height : '15px'}} />
                    </Box>
                </Box>
                </Paper>
            </Box>
            </Box>

            <Box sx={{display : 'flex', gap : 2}}>
            <Box sx={{mt : 2}}>
                <Typography variant='h5'>Payment detail</Typography>
                <Paper elevation={3} sx={{m:2, width : '400px'}}>
                <Box sx={{p:2}}>  
              <Box sx={{display : 'flex', flexDirection : 'column'}}>      
                <Box sx={{display : 'flex', justifyContent :'space-between'}}>
                    <Box>
            <Typography variant='h5'>Master Card</Typography>
            <Box>
                <Box sx={{display : 'flex', gap : 1,mt:1}}>
                    <Typography sx={{color : 'text.secondary'}}>Master</Typography>
                    <Typography sx={{color : 'text.secondary'}}>1234 **** 58745</Typography>
                </Box>
                <Box sx={{display : 'flex', gap : 1,mt:1}}>
                    <Typography sx={{color : 'text.secondary'}}>Expire</Typography>
                    <Typography sx={{color : 'text.secondary'}}>12/23</Typography>
                </Box> 
            </Box>
            </Box>
                    <Box sx={{height : '20px',width : '20px', bgcolor : 'divider', borderRadius : '50%', display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
                    <QuestionMarkIcon sx={{color : 'text.default', height : '15px'}} />
                    </Box>
                </Box>
                 <Box sx={{display : 'flex', justifyContent : 'space-between'}}>
                    <Typography>Aiden Max</Typography>
                    <Box component={"img"} src={Mastercard} sx={{height : '20px', width : '30px'}} />                    
                </Box>
            </Box>
            </Box>
                </Paper>
            </Box>

            <Box sx={{mt : 2}}>
                <Typography variant='h5'>Order summary</Typography>
                <Paper elevation={3} sx={{m:2, width : '400px'}}>
                <Box sx={{display : 'flex', justifyContent :'space-between',p : 2}}>
            <Box sx={{display : 'flex', gap : 2}}>
                <Box>
                    <Typography>Product Price :</Typography>
                    <Typography sx={{mt : 1}}>Delivery :</Typography>
                    <Typography sx={{mt : 1}}>Taxes :</Typography>
                    <Typography sx={{mt : 1}} fontWeight={700}>Total :</Typography>
                </Box>
                <Box>
                    <Typography>$200</Typography>
                    <Typography sx={{mt : 1}}>$10</Typography>
                    <Typography sx={{mt : 1}}>$20</Typography>
                    <Typography sx={{mt : 1}} fontWeight={700}>$230</Typography>
                </Box>
            </Box>
                  <Box sx={{display : 'flex', flexDirection : 'column', alignItems : 'center', justifyContent : 'center'}}>
                    <Typography sx={{color : 'text.secondary'}}>Do you like the product?</Typography>
                    <Typography sx={{color : 'text.secondary', mt : 1}}>leave us a review here</Typography>
                    <Rating  defaultValue={4} precision={4} sx={{color : 'primary.main', mt : 1}}/>
                    <Typography sx={{color : 'primary.main', cursor : 'pointer',mt : 1}}>Submit</Typography>
                    </Box>  
                </Box>
                </Paper>
            </Box>
            </Box>
        </Paper>
    </Box>
  )
}

export default OrderListPage
