import { Box , Paper, Typography, Grid } from '@mui/material'
import { useState } from 'react'
import InputField from '../components/common/InputField'
import CommonButton from '../components/common/CommonButton'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
function NewProductPage() {
    const [step, setStep] = useState(1)
    const handleProductInfo = () => setStep(1)
    const handleMedia = () => setStep(2)
    const handleSocial = () => setStep(3)
    const handlePricing = () => setStep(4)

  return (
    <Box>
        <Box sx={{display : 'flex', alignItems :'center', justifyContent :'space-around',gap:0.5,cursor : 'pointer'}}>
        <Box onClick = {handleProductInfo} sx={{display :'flex', alignItems:'center', gap : 1, opacity : step >=1 ? '1' : '0.5' }}>
            <Box sx={{height:'24px', width : '24px', backgroundColor :'primary.main', color : 'text.default', borderRadius:'50%',display:'flex',alignItems:'center', justifyContent:'center'}}>1</Box>
            <Typography fontWeight={700} sx={{color :'primary.main'}}>Product info</Typography>
        </Box>
        
        <Box onClick = {handleMedia} sx={{display :'flex', alignItems:'center', gap : 1, opacity : step >=2 ? '1' : '0.5', cursor : 'pointer'}}>
            <Box sx={{height:'24px', width : '24px', backgroundColor :'primary.main', color : 'text.default', borderRadius:'50%',display:'flex',alignItems:'center', justifyContent:'center'}}>2</Box>
            <Typography fontWeight={700} sx={{color :'primary.main'}}>Media</Typography>
        </Box>
        <Box onClick = {handleSocial} sx={{display :'flex', alignItems:'center', gap : 1, opacity : step >=3 ? '1' : '0.5',cursor : 'pointer'}}>
            <Box sx={{height:'24px', width : '24px', backgroundColor :'primary.main', color : 'text.default', borderRadius:'50%',display:'flex',alignItems:'center', justifyContent:'center'}}>3</Box>
            <Typography fontWeight={700} sx={{color :'primary.main'}}>Social</Typography>
        </Box>
        <Box onClick = {handlePricing} sx={{display :'flex', alignItems:'center', gap : 1, opacity : step >=4 ? '1' : '0.5',cursor : 'pointer'}}>
            <Box sx={{height:'24px', width : '24px', backgroundColor :'primary.main', color : 'text.default', borderRadius:'50%',display:'flex',alignItems:'center', justifyContent:'center'}}>4</Box>
            <Typography fontWeight={700} sx={{color :'primary.main'}}>Pricing</Typography>
        </Box>
        </Box>
        <Box sx={{display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
            <Paper elevation={3} sx={{height : 'auto', width : '50%',mt:5}}>
            {step === 1 &&
            <Box>
            <Typography variant='h5'sx={{textAlign : 'center',m:2}}>Product Information</Typography>
            <Box sx={{p:2}}> 
             <Box sx={{display : 'flex', justifyContent : 'space-around'}}> 
             <Box>     
            <Typography sx={{ mb: 2 }}>Name</Typography>
              <InputField
                 type="text"
                placeholder="Off - White"/>
                </Box> 
            <Box>
            <Typography sx={{ mb: 2 }}>Weight</Typography>
              <InputField
                 type="text"
                 placeholder="42"/>   
            </Box>
            </Box>  
            <Box sx={{display : 'flex', justifyContent : 'space-around',mt:2}}>
            <Box>
             <Typography sx={{ mb: 2 }}>Sizes</Typography>
              <InputField
                 type="text"
                 placeholder="Large"/>   
              </Box>   
              <Box>
               <Typography sx={{ mb: 2 }}>category</Typography>
              <InputField
                 type="text"
                placeholder="Clothings"/>
                </Box>
                </Box>
            <Box sx={{ml:2, mt:2}}>
              <Typography sx={{ mb: 2 }}>Description</Typography>
              <InputField
                 type="text"
                placeholder="Some initial bold text"/>
                </Box>
                </Box>
     <Box sx={{mt:2, mb:2, display :'flex', justifyContent : 'flex-end', mr:2}}>
        <CommonButton ButtonName={"Next"} Buttoncolor={"primary.main"} Textcolor={"text.default"} />
     </Box>
            </Box>
            }
            {step ===2 && 
            <Box>
                <Typography variant='h5' sx={{textAlign : 'center', mt:2}}>Media</Typography>
                <Box  sx={{ display: "flex", flexDirection: "column", borderRadius:'8px'}}>
            <Box  sx={(theme)  =>({
                display : 'flex', flexDirection :'column', justifyContent : 'center', alignItems :'center',m:2,p:3, borderRadius : '8px', border : '4px solid transparent', borderImage : `repeating-linear-gradient(45deg,${theme.palette.primary.main} 0px 8px, transparent 8px 16px ) 1`,cursor : 'pointer'
            })}>
            <CloudUploadIcon sx={{color :'primary.main' , fontSize:'50px'}}/>
            <Typography> <Box 
                component="span"
                sx={{color : 'primary.main', cursor :'pointer'}}> Drop your image here or </Box>{" "} Browse</Typography>
            <Typography sx={{color : 'text.secondary'}}>Support: JPG, JPEG, PNG</Typography>
            </Box>
            <Box>
            </Box>

        </Box > 
            </Box>
            }
            {
            step === 3 &&
            <Box>
            <Typography variant='h5'sx={{textAlign : 'center',m:2}}>Social</Typography>
            <Box sx={{p:2}}> 
             <Box sx={{display : 'flex', justifyContent : 'space-around'}}> 
             <Box>     
            <Typography sx={{ mb: 2 }}>Facebook Account</Typography>
              <InputField
                 type="text"
                placeholder="@warner"/>
                </Box> 
            <Box>
            <Typography sx={{ mb: 2 }}>Instagram Account</Typography>
              <InputField
                 type="text"
                 placeholder="@warner"/>   
            </Box>
            </Box>  
            <Box sx={{display : 'flex', justifyContent : 'space-around',mt:2}}>
            <Box>
             <Typography sx={{ mb: 2 }}>LinkedIn Account</Typography>
              <InputField
                 type="text"
                 placeholder="@warner"/>   
              </Box>   
              <Box>
               <Typography sx={{ mb: 2 }}>Dribble Account</Typography>
              <InputField
                 type="text"
                placeholder="@warner"/>
                </Box>
                </Box>
              <Box sx={{display : 'flex', justifyContent : 'space-around', mt :2}}> 
             <Box>     
            <Typography sx={{ mb: 2 }}>Behance Account</Typography>
              <InputField
                 type="text"
                placeholder="@warner"/>
                </Box> 
            <Box>
            <Typography sx={{ mb: 2 }}>UI8 Account</Typography>
              <InputField
                 type="text"
                 placeholder="@warner"/>   
            </Box>
            </Box>  
                </Box>
     <Box sx={{mt:2, mb:2, display :'flex', justifyContent : 'flex-end', mr:2}}>
        <CommonButton ButtonName={"Next"} Buttoncolor={"primary.main"} Textcolor={"text.default"} />
     </Box>
            </Box>
            }
            {
                step ===4 &&
                 <Box>
            <Typography variant='h5'sx={{textAlign : 'center',m:2}}>Pricing</Typography>
            <Box sx={{p:2}}> 
             <Box sx={{display : 'flex', justifyContent : 'space-around'}}> 
             <Box>     
            <Typography sx={{ mb: 2 }}>Price</Typography>
              <InputField
                 type="text"
                placeholder="$100"/>
                </Box> 
            <Box>
            <Typography sx={{ mb: 2 }}>Currency</Typography>
              <InputField
                 type="text"
                 placeholder="USD"/>   
            </Box>
            </Box>  
            <Box sx={{display : 'flex', justifyContent : 'space-around',mt:2}}>
            <Box>
             <Typography sx={{ mb: 2 }}>SKU</Typography>
              <InputField
                 type="text"
                 placeholder="829672639"/>   
              </Box>   
              <Box>
               <Typography sx={{ mb: 2 }}>Tags</Typography>
              <InputField
                 type="text"
                placeholder="In stock"/>
                </Box>
                </Box> 
                </Box>
     <Box sx={{mt:2, mb:2, display :'flex', justifyContent : 'flex-end', mr:2}}>
        <CommonButton ButtonName={"Next"} Buttoncolor={"primary.main"} Textcolor={"text.default"} />
     </Box>
            </Box>
            }
            </Paper>
            </Box>
    </Box>
  )
}

export default NewProductPage
