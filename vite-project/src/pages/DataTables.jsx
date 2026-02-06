import { Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.png'
import pic7 from '../assets/pic7.png'
import pic8 from '../assets/pic8.png'
import pic9 from '../assets/pic9.png'
import pic10 from '../assets/pic10.png'
import pic11 from '../assets/pic11.png'
import pic12 from '../assets/pic12.png'
function DataTables() {
    const employees = [
        {"name" : "Tiger Nixon", "avatar" : pic5, "position" : 'System Architect', "age" : 61, "office" : "Tokyo", "salary" : "$170,750", "startdate": "22/5/2009" },
        {"name" : "Garrett Winters", "avatar" : pic6, "position" : 'Accountant', "age" : 63, "office" : "San Francisco", "salary" : "$433,060", "startdate": "22/5/2011" },
        {"name" : "Ashton Cox", "avatar" : pic7, "position" : 'Technical Author', "age" : 66, "office" : "Edinburgh", "salary" : "$320,800", "startdate": "22/5/2011" },
        {"name" : "Tiger Nixon", "avatar" : pic8, "position" : 'Javascript Developer', "age" : 22, "office" : "Tokyo", "salary" : "$170,750", "startdate": "22/5/2012" },
        {"name" : "Cedric Kelly", "avatar" : pic9, "position" : 'Integration Specialist', "age" : 31, "office" : "New York", "salary" : "$86,000", "startdate": "22/5/2012" },
        {"name" : "Airi Satou", "avatar" : pic10, "position" : 'Sales Assistant', "age" : 45, "office" : "Edinburgh", "salary" : "$433,060", "startdate": "30/5/2009" },
        {"name" : "Brielle Williamson", "avatar" : pic11, "position" : 'Integration Specialist', "age" : 19, "office" : "Berlin", "salary" : "$162,700", "startdate": "22/5/2015" },
        {"name" : "Herrod Chandler", "avatar" : pic12, "position" : 'Javascript Developer', "age" : 61, "office" : "Islamabad", "salary" : "$372,000", "startdate": "28/5/2016" },
        {"name" : "Rhona Davidson", "avatar" : pic1, "position" : 'Software Engineer', "age" : 59, "office" : "Delhi", "salary" : "$137,500", "startdate": "22/5/2006" },
        {"name" : "Colleen Hurst", "avatar" : pic2, "position" : 'Accountant', "age" : 55, "office" : "London", "salary" : "$327,900", "startdate": "21/5/2008" },
        {"name" : "Sonya Frost", "avatar" : pic3, "position" : 'Sales Assistant', "age" : 41, "office" : "Karachi", "salary" : "$205,500", "startdate": "22/5/2010" },
        {"name" : "Ashton Cox", "avatar" : pic4, "position" : 'Technical Author', "age" : 36, "office" : "New York", "salary" : "$103,600", "startdate": "21/5/2013" },

    ]
  return (
    <Paper elevation={6}>
        <Table  sx={{
    '& th, & td': {
      borderBottom: '1px solid #e0e0e0',
    },
  }}>
            <TableHead>
                <TableCell sx={{fontSize : '14px', fontWeight:'700' }}>Name</TableCell>
                <TableCell sx={{fontSize : '14px', fontWeight:'700' }}>Position</TableCell>
                <TableCell sx={{fontSize : '14px', fontWeight:'700' }}>Age</TableCell>
                <TableCell sx={{fontSize : '14px', fontWeight:'700' }}>Office</TableCell>
                <TableCell sx={{fontSize : '14px', fontWeight:'700' }}>Salary</TableCell>
                <TableCell sx={{fontSize : '14px', fontWeight:'700' }}>Start date</TableCell>
            </TableHead>
            <TableBody >
                {employees.map((emp, index)=>( 
                <TableRow key={index}>
                    <TableCell>
                        <Box sx={{display : 'flex', alignItems : 'center', gap : 1}}>
                            <Box component={"img"} src={emp.avatar} sx={{height : '25px'}}/>
                            <Typography sx={{fontSize : '12px', color : 'text.secondary'}}>{emp.name}</Typography>
                        </Box>
                    </TableCell>
                    <TableCell sx={{fontSize : '12px', color : 'text.secondary'}}>{emp.position}</TableCell>
                    <TableCell sx={{fontSize : '12px', color : 'text.secondary'}}>{emp.age}</TableCell>
                    <TableCell sx={{fontSize : '12px', color : 'text.secondary'}}>{emp.office}</TableCell>
                    <TableCell sx={{fontSize : '12px', color : 'text.secondary'}}>{emp.salary}</TableCell>
                    <TableCell sx={{fontSize : '12px', color : 'text.secondary'}}>{emp.startdate}</TableCell>
                </TableRow>
                ) )}
            </TableBody>
        </Table>
    </Paper>
  )
}

export default DataTables
