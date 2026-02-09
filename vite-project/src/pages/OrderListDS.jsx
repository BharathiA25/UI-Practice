import { Box, Paper, Table, TableCell, TableHead,TableBody, TableRow, Typography } from '@mui/material'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.png'
import pic7 from '../assets/pic7.png'
import pic8 from '../assets/pic8.png'
import pic10 from '../assets/pic10.png'
import pic11 from '../assets/pic11.png'
import pic12 from '../assets/pic12.png'

function OrderListDS() {
    const orderlist = [
        {"name": "David", "email":"david@gmail.com","image":pic5, "product" : "BKLGO Hoodie", "id": "#10421", "status":"243598234", "Revenue":"Paid", "date":"12 Jan, 2023"},
        {"name": "Warner", "email":"warner@gmail.com","image":pic6, "product" : "MacBook Pro", "id": "#10422", "status":"877712", "Revenue":"Canceled", "date":"13 Jan, 2023"},
        {"name": "Smith", "email":"smith@gmail.com","image":pic7, "product" : "Metro Bar Stool", "id": "#10423", "status":"0134729", "Revenue":"Refunded", "date":"14 Jan, 2023"},
        {"name": "Devo", "email":"devo@gmail.com","image":pic8, "product" : "Alchimia Chair", "id": "#10424", "status":"113213", "Revenue":"Paid", "date":"15 Jan, 2023"},
        {"name": "Victory", "email":"victory@gmail.com","image":pic10, "product" : "Fendi Gradient Coat", "id": "#10425", "status":"634729", "Revenue":"Paid", "date":"16 Jan, 2023"},
        {"name": "Henry", "email":"henry@gmail.com","image":pic11, "product" : "Off White Cotton", "id": "#10426", "status":"634729", "Revenue":"Canceled", "date":"17 Jan, 2023"},
        {"name": "Mark", "email":"mark@gmail.com","image":pic12, "product" : "Y-3 Yohji Yamamoto", "id": "#10427", "status":"634729", "Revenue":"Refunded", "date":"18 Jan, 2023"},
        {"name": "Anderson", "email":"anderson@gmail.com","image":pic1, "product" : "Fendi Gradient Coat", "id": "#10428", "status":"113213", "Revenue":"Refunded", "date":"19 Jan, 2023"},
        {"name": "John", "email":"john@gmail.com","image":pic2, "product" : "Metro Bar Stool", "id": "#10429", "status":"877712", "Revenue":"Paid", "date":"20 Jan, 2023"},
        {"name": "Duplesis", "email":"duplesis@gmail.com@gmail.com","image":pic4, "product" : "MacBook Pro", "id": "#10430", "status":"0134729", "Revenue":"Canceled", "date":"21 Jan, 2023"},
        {"name": "Miz", "email":"miz@gmail.com","image":pic3, "product" : "BKLGO Hoodie", "id": "#10431", "status":"877712", "Revenue":"Canceled", "date":"22 Jan, 2023"},
        {"name": "Watson", "email":"watson@gmail.com","image":pic5, "product" : "Alchimia Chair", "id": "#10432", "status":"634729", "Revenue":"Refunded", "date":"23 Jan, 2023"}
    ]
  return (
    <Paper elevation={6}>
        <Table sx={{
            "& th, & td" : {
                borderBottom: '1px solid #e0e0e0',
            }

        }}>
            <TableHead>
                <TableCell sx={{fontWeight : '700'}}>Customer</TableCell>
                <TableCell sx={{fontWeight : '700'}}>Product</TableCell>
                <TableCell sx={{fontWeight : '700'}}>Id</TableCell>
                <TableCell sx={{fontWeight : '700'}}>Status</TableCell>
                <TableCell sx={{fontWeight : '700'}}>Revenue</TableCell>
                <TableCell sx={{fontWeight : '700'}}>Date</TableCell>
            </TableHead>
            <TableBody>
                {orderlist.map((list, index) =>(
                    <TableRow key={index}> 
                        <TableCell>
                            <Box sx={{display : 'flex', gap : 1, alignItems : 'center'}}>
                                <Box component={"img"} src={list.image} sx={{height : '30px'}}/>
                                <Box>
                                    <Typography sx={{fontSize : '14px'}}>{list.name}</Typography>
                                    <Typography sx={{fontSize : '12px', color : 'text.secondary'}}>{list.email}</Typography>
                                </Box>
                            </Box>
                        </TableCell>
                        <TableCell sx={{fontSize : '12px', color : 'text.secondary'}}> {list.product} </TableCell>
                        <TableCell sx={{fontSize : '12px', color : 'text.secondary'}}> {list.id} </TableCell>
                        <TableCell sx={{fontSize : '12px', color : 'text.secondary'}}> {list.status} </TableCell>
                        <TableCell sx={{fontSize : '12px', color : 'text.secondary'}}> 
                            <Box sx={{display :'flex', gap : 1, alignItems :'center'}}>
                            <Box sx={{height:'10px', width : '10px', borderRadius : '50%', bgcolor : list.Revenue === "Paid" ? 'darkblue' : list.Revenue ==="Canceled" ? 'danger' : 'status'}}/>
                            <Typography>{list.Revenue}</Typography>
                            </Box></TableCell>
                        <TableCell sx={{fontSize : '12px', color : 'text.secondary'}}> {list.date} </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Paper>
  )
}

export default OrderListDS
