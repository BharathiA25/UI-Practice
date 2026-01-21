import { Box, Button, Paper, Typography } from "@mui/material"
import PricingCharge from "../components/common/PricingCharge"
function PricingPage() {
  return (
    <Box>
     <Box >
            <Typography variant='h4'>Pricing</Typography>
            <Typography sx={{color : 'text.secondary', mt:2}}>Simple Pricing. No Hidden Fees. Advance Features for your business.</Typography>
         </Box>
         <Box sx={{display : 'flex', gap : 10, alignItems : 'center', justifyContent:'space-around',p:3}}>
        <Paper elevation={3} sx={{height : '400px', width : '400px',p:3}}>
        <PricingCharge type={'Free/Personal'} description={'For a Lifetime'} button={'Current Plan'}/>
        </Paper>
           <Paper elevation={3} sx={{height : '400px', width : '400px',p:3}} >
                <PricingCharge type={'$89/Professional'} description={'/year'} button={'Try for free'}/>
        </Paper>
           <Paper elevation={3}sx={{height : '400px', width : '400px',p:3}}>
            <PricingCharge type={'Custom/Enterprise'} description={'Reach out for a quote'} button={'Contact Us'}/>        
        </Paper>
         </Box>
      {/* <Paper elevation={3}>
        <PricingCharge type={'Free/Personal'} description={'For a Lifetime'} button={'Current Plan'}/>
        <PricingCharge type={'$89/Professional'} description={'/year'} button={'Try for free'}/>
        <PricingCharge type={'Custom/Enterprise'} description={'Reach out for a quote'} button={'Try for free'}/>

        </Paper> */}
    </Box>     
  )
}

export default PricingPage
