import { Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import ImageStyle from '../components/common/ImageStyle'
import visa from '../assets/Visa.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CommonButton from '../components/common/CommonButton';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
function PlansAndBillingPage() {
  const Billings = [
    {"name": "Billing #780-Dec 2022","status":true, "date":"Dec 23, 2022", "amount": "USD $12.00", "plan" : "Basic plan", "users" : "15 Users"},
    {"name": "Billing #345-Nov 2022", "status":false, "date":"Nov 12, 2022", "amount": "USD $22.00", "plan" : "Basic plan", "users" : "56 Users"},
    {"name": "Billing #213-Oct 2022", "status":true,"date":"Oct 09, 2022", "amount": "USD $80.00", "plan" : "Basic plan", "users" : "90 Users"},
    {"name": "Billing #324-Agu 2022", "status":false,"date":"Aug 03, 2022", "amount": "USD $12.00", "plan" : "Basic plan", "users" : "22 Users"},
    {"name": "Billing #123-July 2022", "status":true,"date":"July 13, 2022", "amount": "USD $67.00", "plan" : "Basic plan", "users" : "23 Users"},
  ]
  return (
    <Box sx={{display : 'flex', flexDirection : 'column', gap : 2}}>
      <Box>
        <Typography variant='h5'>Plans and billing </Typography>
        <Typography sx={{fontSize:'14px', color : 'text.secondary',mt:1}}>Manage your plan and billing details</Typography>
      </Box>
      <Box sx={{width : '100%', display:'flex', justifyContent : 'space-between'  }}>
        <Paper elevation={6} sx={{p:2, width : '40%'}}>
          <Box sx={{display : 'flex', justifyContent : 'space-between'}}>
          <Box>
          <Typography variant='h5'>Basic plan </Typography>
          <Typography sx={{fontSize:'14px', color : 'text.secondary',mt:1}}>Our most popular plan for small teams.</Typography>
          <Box sx={{mt:1}}><ImageStyle count={6}/></Box>
          
          </Box>
          <Box sx={{display : 'flex', alignItems : 'center', gap : 1}}>
          <Typography variant='h5'>$20 </Typography>
          <Typography sx={{fontSize:'14px', color : 'text.secondary', mt:1}}>per month</Typography>
          </Box>
          </Box>
          <Box sx={{display : 'flex', gap:1, justifyContent : 'flex-end'}}>
            <Typography sx={{color : 'primary.main'}}>Upgrade plan</Typography>
            <KeyboardArrowDownIcon sx={{color : 'primary.main'}} />
          </Box>
        </Paper>
        <Paper elevation={6} sx={{p:2, width : '40%'}}>
      <Box>
        <Typography variant='h5'>Payment method</Typography>
        <Typography sx={{fontSize:'14px', color : 'text.secondary',mt:1}}>Change how you pay for your plan.</Typography>
      </Box>
      <Paper elevation={3} sx={{mt:2}}>
        <Box sx={{display : 'flex', justifyContent : 'space-between',alignItems : 'center', p:2}}>
          <Box sx={{display :'flex', gap : 2, alignItems : 'center'}}>
            <Box component={"img"} src={visa} sx={{height : '20px'}}/>
            <Box>
              <Typography sx={{fontSize : '18px', fontWeight : '500'}}>Visa ending in 6789</Typography>
              <Typography sx={{fontSize:'14px', color : 'text.secondary',}}>Expiry 01/2023</Typography>
            </Box>
          </Box>
          <Box>
            <CommonButton ButtonName={"Edit"} Buttoncolor={"primary.main"} Textcolor={"text.default"} />
          </Box>
        </Box>
      </Paper>
        </Paper>
      </Box>
      <Box>
        <Paper sx={{p:2}}>
      <Box sx={{display : 'flex', alignItems : 'center', justifyContent : 'space-between'}}>
      <Box>
        <Typography variant='h5'>Billing history</Typography>
        <Typography sx={{fontSize:'14px', color : 'text.secondary',mt:1}}>Download your previous plan receipts and usage details.</Typography>
      </Box>
        <CommonButton ButtonName={"Download all"} Buttoncolor={"primary.main"} Textcolor={"text.default"} />
      </Box>
      <Box>
        <Table sx={{
    '& th, & td': {
      borderBottom: '1px solid #e0e0e0',
    },
  }}>
          <TableHead>
            <TableCell sx={{fontSize : '14px', fontWeight:'700' }}>Billing</TableCell>
            <TableCell sx={{fontSize : '14px', fontWeight:'700' }}>Billing Date</TableCell>
            <TableCell sx={{fontSize : '14px', fontWeight:'700' }}>Amount</TableCell>
            <TableCell sx={{fontSize : '14px', fontWeight:'700' }}>Plan</TableCell>
            <TableCell sx={{fontSize : '14px', fontWeight:'700' }}>Users</TableCell>
          </TableHead>
          <TableBody>
            {Billings.map((bill, index)=>(
              <TableRow key={index}>
                <TableCell sx={{display : 'flex', gap : 1, alignItems : 'center'}}>
                  <Box> {bill.status ? <CheckBoxIcon sx={{color : 'divider'}} /> : <CheckBoxOutlineBlankIcon  sx={{color : 'divider'}} />} </Box>
                  <PictureAsPdfIcon/>
                  <Typography>{bill.name}</Typography>
                  <Typography>Paid</Typography>
                </TableCell>
                <TableCell sx={{fontSize:'12px', color : 'text.secondary'}}>{bill.date}</TableCell>
                <TableCell sx={{fontSize:'12px', color : 'text.secondary'}}>{bill.amount}</TableCell>
                <TableCell sx={{fontSize:'12px', color : 'text.secondary'}}>{bill.plan}</TableCell>
                <TableCell sx={{fontSize:'12px', color : 'text.secondary'}}>{bill.users}</TableCell>
                <TableCell sx={{display : 'flex', alignItems : 'center', gap : 2}}>
                  <CommonButton ButtonName={"Download all"} Buttoncolor={"dark"} Textcolor={"text.default"}/>
                  <Box>
                    <Box sx={{height : '5px', width :'5px', borderRadius :'50%', bgcolor:'dark',}} />
                    <Box sx={{height : '5px', width :'5px', borderRadius :'50%', bgcolor:'dark',mt:0.2}} />
                    <Box sx={{height : '5px', width :'5px', borderRadius :'50%', bgcolor:'dark',mt:0.2}} />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
        </Paper>
      </Box>
    </Box>
  )
}

export default PlansAndBillingPage
