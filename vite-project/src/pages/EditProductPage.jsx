import { Box, Paper, Typography } from '@mui/material'
import InputField from '../components/common/InputField'
import CommonButton from '../components/common/CommonButton'
function EditProductPage() {
  return (
    <Box>
        <Paper elevation={6} sx={{width : '100%', p:2, display : 'flex', flexDirection : 'column', gap : 2, alignItems : 'center'}}>
             <Paper elevation={3} sx={{width : '50%'}}>
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
            </Paper>
            <Paper elevation={3} sx={{width : '50%'}}>
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
            </Paper>
            <Paper elevation={3} sx={{width : '50%'}}>
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
            </Paper>
        </Paper>
    </Box>
  )
}

export default EditProductPage
