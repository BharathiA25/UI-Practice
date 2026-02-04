import { Box, Paper, Typography } from '@mui/material'
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import InputField from '../components/common/InputField';
import ImageStyle from '../components/common/ImageStyle';
import KabanCard from '../components/common/KabanCard';
import LinearScaleSharpIcon from '@mui/icons-material/LinearScaleSharp'
import AddSharpIcon from '@mui/icons-material/AddSharp';

function KabanPage() {
  return (
    <Box sx={{p:2}}>
        <Box sx={{display : 'flex', justifyContent : 'space-between'}}>
            <Box>
                <Typography variant='h5'>Overview</Typography>
                <Typography sx={{color : 'text.secondary', mt:2}}>Edit or modify all card as you want</Typography>
            </Box>
            <Box >
                <Typography>Teams Members:</Typography>
                <Box sx={{display :'flex', mt:2}}>
                    <Box> <ImageStyle count={4}/> </Box>
                    <Box sx={{bgcolor: 'divider', borderRadius : '50%', height : '40px', width : '40px', display : 'flex',alignItems:'center',justifyContent : 'center', ml:25}}>
                    <ShareRoundedIcon sx={{color : 'primary.main'}}/>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box  component="hr" sx={{mt:3}}/>
        <Box sx={{display : 'flex', justifyContent : 'space-between', mt:5}}>
            <Box sx={{display : 'flex', gap : 2}}>
                <InputField placeholder={"Search Projects"} iconname={"search"}/>
                <InputField placeholder={"Search Projects"} iconname={"calender"}/>
            </Box>
            <Box sx={{display : 'flex', gap : 2, alignItems : 'center'}}>
                <Box sx={{bgcolor: 'divider', borderRadius : '50%', height : '40px', width : '40px', display : 'flex',alignItems:'center',justifyContent : 'center', ml:25}}>
                    <FilterAltIcon sx={{color : 'primary.main'}}/>
                </Box>
                <Typography>Apply Filter</Typography>
            </Box>
        </Box>
        <Box  component="hr" sx={{mt:3}}/>
        <Paper elevation={6} sx={{width : '100%', mt:5, p:3, display : 'flex', justifyContent : 'space-around'}}>
            <Paper elevation={6} sx={{width : '30%'}}>
            <Box sx={{bgcolor : 'divider',borderRadius : '8px 8px 0px 0px'}}> 
                <Box sx={{height : '20px', width : '100%',bgcolor : 'text.secondary', borderRadius : '8px 8px 0px 0px'}}/>
                <Box sx={{display : 'flex', justifyContent : 'space-between', p:2}}>
                    <Typography>To Do task</Typography>
                    <LinearScaleSharpIcon sx={{color : 'text.secondary'}}/>
                </Box>
            </Box>
            <Box sx={{display : 'flex', alignItems : 'center', justifyContent : 'center', mt:3}}>
                <Box sx={{height : '30px', width : '80%', border : '1px dashed gray', borderRadius : '8px', display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
                    <AddSharpIcon sx={{color : 'text.secondary'}}/>
                </Box>
            </Box>
            <KabanCard name={"Webdev"} days={"12"} team={"Cisco Team"} attachCount={"7"} commentCount={"8"} />
            <KabanCard name={"Create a new theme"} days={"9"} team={"Gento Team"} attachCount={"3"} commentCount={"5"} />
            <KabanCard name={"Improve social banners"} days={"17"} team={"Developing Team"} attachCount={"5"} commentCount={"9"} />
            <KabanCard name={"Health app"} days={"21"} team={"Design Team"} attachCount={"2"} commentCount={"7"} />

            </Paper>
            <Paper elevation={6} sx={{width : '30%'}}>
            <Box sx={{bgcolor : 'divider',borderRadius : '8px 8px 0px 0px'}}> 
                <Box sx={{height : '20px', width : '100%',bgcolor : 'primary.main', borderRadius : '8px 8px 0px 0px'}}/>
                <Box sx={{display : 'flex', justifyContent : 'space-between', p:2}}>
                    <Typography>In process</Typography>
                    <LinearScaleSharpIcon sx={{color : 'text.secondary'}}/>
                </Box>
            </Box>
            
            <KabanCard name={"Cloud computing"} days={"31"} team={"Gento Team"} attachCount={"2"} commentCount={"0"} />
            <KabanCard name={"Update subscription"} days={"15"} team={"Developing Team"} attachCount={"5"} commentCount={"4"} />
            <KabanCard name={"Poster design"} days={"21"} team={"Design Team"} attachCount={"10"} commentCount={"4"} />

            </Paper>
            <Paper elevation={6} sx={{width : '30%'}}>
            <Box sx={{bgcolor : 'divider',borderRadius : '8px 8px 0px 0px'}}> 
                <Box sx={{height : '20px', width : '100%',bgcolor : 'primary.main', borderRadius : '8px 8px 0px 0px'}}/>
                <Box sx={{display : 'flex', justifyContent : 'space-between', p:2}}>
                    <Typography>In process</Typography>
                    <LinearScaleSharpIcon sx={{color : 'text.secondary'}}/>
                </Box>
            </Box>
            
            <KabanCard name={"Landing page"} days={"11"} team={"Design Team"} attachCount={"7"} commentCount={"8"} />
            <KabanCard name={"Food app design"} days={"21"} team={"Design Team"} attachCount={"4"} commentCount={"5"} />
            <KabanCard name={"Web design"} days={"14"} team={"Cisco Team"} attachCount={"12"} commentCount={"8"} />
            <KabanCard name={"Flyer Design"} days={"22"} team={"Developing Team"} attachCount={"5"} commentCount={"13"} />
            <KabanCard name={"Cloud computing"} days={"12"} team={"Gento Team"} attachCount={"6"} commentCount={"7"} />


            </Paper>
        </Paper>
    </Box>
  )
}

export default KabanPage
