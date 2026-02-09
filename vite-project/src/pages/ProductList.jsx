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

function ProductList() {
    const productList = [
        {"image":pic5, "product" : "BKLGO Hoodie", "category" : "clothings", "quantity" : 12, "sku" : "243598234", "salary" : "$170,750", "status" : 'In Stock'},
        {"image":pic6, "product" : "MacBook Pro", "category" : "Electronics", "quantity" : 63, "sku" : "877712", "salary" : "$433,060", "status" : 'Out of Stock'},
        {"image":pic7, "product" : "Metro Bar Stool", "category" : "Furniture", "quantity" : 86, "sku" : "0134729", "salary" : "$320,800", "status" : 'Out of Stock'},
        {"image":pic8, "product" : "Alchimia Chair", "category" : "Furniture", "quantity" : 22, "sku" : "113213", "salary" : "$170,750", "status" : 'In Stock'},
        {"image":pic10, "product" : "Fendi Gradient Coat", "category" : "clothings", "quantity" : 31, "sku" : "634729", "salary" : "$86,000", "status" : 'Out of Stock'},
        {"image":pic11, "product" : "Off White Cotton", "category" : "clothings", "quantity" : 23, "sku" : "634729", "salary" : "$433,060", "status" : 'In Stock'},
        {"image":pic12, "product" : "Y-3 Yohji Yamamoto", "category" : "Shoes", "quantity" : 31, "sku" : "634729", "salary" : "$162,700", "status" : 'In Stock' },
        {"image":pic1, "product" : "Fendi Gradient Coat", "category" : "clothings", "quantity" : 34, "sku" : "113213", "salary" : "$372,000", "status" : 'Out of Stock'},
        {"image":pic2, "product" : "Metro Bar Stool", "category" : "Furniture", "quantity" : 59, "sku" : "877712", "salary" : "$137, 500", "status" : 'In Stock'},
        {"image":pic4, "product" : "MacBook Pro","category" : "Electronics", "quantity" : 34, "sku" : "0134729", "salary" : "$327,900", "status" : 'Out of Stock' },
        {"image":pic3, "product" : "BKLGO Hoodie","category" : "clothings", "quantity" : 41, "sku" : "877712", "salary" : "$205,500", "status" : 'Out of Stock'},
        {"image":pic7, "product" : "Alchimia Chair","category" : "Furniture", "quantity" : 21, "sku" : "634729", "salary" : "$103,600","status" : 'In Stock' }
    ]
  return (
    <Paper elevation={6}>
        <Table sx={{
            "& th, & td" : {
                borderBottom: '1px solid #e0e0e0',
            }

        }}>
            <TableHead>
                <TableCell sx={{fontWeight : '700'}}>Product</TableCell>
                <TableCell sx={{fontWeight : '700'}}>Category</TableCell>
                <TableCell sx={{fontWeight : '700'}}>Quantity</TableCell>
                <TableCell sx={{fontWeight : '700'}}>Sku</TableCell>
                <TableCell sx={{fontWeight : '700'}}>Salary</TableCell>
                <TableCell sx={{fontWeight : '700'}}>Status</TableCell>
            </TableHead>
            <TableBody>
                {productList.map((list, index) =>(
                    <TableRow key={index}> 
                        <TableCell>
                            <Box sx={{display : 'flex', gap : 1, alignItems : 'center'}}>
                                <Box component={"img"} src={list.image} sx={{height : '30px'}}/>
                                <Typography sx={{fontSize : '14px'}}>{list.product}</Typography>
                            </Box>
                        </TableCell>
                        <TableCell sx={{fontSize : '12px', color : 'text.secondary'}}> {list.category} </TableCell>
                        <TableCell sx={{fontSize : '12px', color : 'text.secondary'}}> {list.quantity} </TableCell>
                        <TableCell sx={{fontSize : '12px', color : 'text.secondary'}}> {list.sku} </TableCell>
                        <TableCell sx={{fontSize : '12px', color : 'text.secondary'}}> {list.salary} </TableCell>
                        <TableCell > 
                            <Box >
                            <Typography sx={{fontSize : '12px', color : list.status === 'In Stock' ? 'textgreen' : 'danger', bgcolor : list.status === "In Stock" ? 'litegreen' : 'litered' , borderRadius : '25px', width : '60%', textAlign : 'center' }}>{list.status}</Typography>
                            </Box>
                            </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Paper>
  )
}

export default ProductList
