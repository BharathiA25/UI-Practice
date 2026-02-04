import { Box, Paper, Typography } from "@mui/material"
import AddSharpIcon from '@mui/icons-material/AddSharp';
import QueryBuilderSharpIcon from '@mui/icons-material/QueryBuilderSharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import ImageStyle from './ImageStyle'
import AttachFileSharpIcon from '@mui/icons-material/AttachFileSharp';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
function KabanCard({name, days, team, attachCount, commentCount}) {
  return (
            <Paper elevation={6} sx={{m:2, p : 2, width :'300px'}}>
                <Box sx={{display : 'flex', alignItems : 'center', justifyContent : 'space-between'}}>
                    <Typography>{name}</Typography>
                    <Box sx={{display : 'flex'}}>
                        <QueryBuilderSharpIcon/>
                        <Typography>{days} Days</Typography>
                    </Box>
                </Box>
                <Box sx={{display : 'flex', gap : 2,mt : 2}}>
                <GroupsSharpIcon/>
                <Typography>{team}</Typography>
                </Box>
                <Box sx={{mt:6, display :'flex',justifyContent :'space-between', alignItems : 'center', width:'80%'}}>
                    <Box sx={{display :'flex', gap:2}}>
                        <Box sx={{display : 'flex', gap : 1}}>
                            <AttachFileSharpIcon/>
                            <Typography>{attachCount}</Typography>
                        </Box>
                        <Box sx={{display : 'flex', gap : 1}}>
                            <ChatRoundedIcon/>
                            <Typography>{commentCount}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display : 'flex', alignItems :'center', gap : 2}}>
                    <Box sx={{bgcolor: 'divider', borderRadius : '50%', height : '20px', width : '20px', display : 'flex',alignItems:'center',justifyContent : 'center'}}>
                    <AddSharpIcon sx={{color : 'primary.main'}}/>
                    </Box>
                     <ImageStyle count={3}/> 
                    </Box>
                </Box>

            </Paper>

)
}

export default KabanCard
