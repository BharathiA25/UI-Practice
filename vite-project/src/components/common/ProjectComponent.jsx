import { Box, Paper, Typography } from "@mui/material"
import ImageStyle from "./ImageStyle"
function ProjectComponent({title, image ,imageBG,  description, participantCount, date }) {
  return (
    <Paper elevation={6} sx={{p:2, height : '200px', width : '300px'}}>
                    <Box>
                        <Box sx={{display : 'flex', alignItems : 'center', justifyContent : 'space-between'}}>
                            <Box sx={{display : 'flex', alignItems : 'center', gap : 2}}>
                            <Box sx={{height : '50px', width : '50px', borderRadius : '8px', bgcolor : imageBG, display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
                                <Box component={"img"} src = {image} sx={{height : '20px'}} />
                            </Box>
                            <Box sx={{display : 'flex', flexDirection : 'column', gap : 0.2}}>
                                <Typography>{title}</Typography>
                                <ImageStyle count={5} />
                            </Box>
                            </Box>
                            <Box>
                                <Box sx={{height : '5px', width : '5px', borderRadius : '50%', bgcolor : 'divider'}}/>
                                <Box sx={{height : '5px', width : '5px', borderRadius : '50%', bgcolor : 'divider',mt:0.2}}/>
                                <Box sx={{height : '5px', width : '5px', borderRadius : '50%', bgcolor : 'divider', mt:0.2}}/>
                            </Box>
                        </Box>
                        <Box sx={{mt:2}}>
                            <Typography sx={{color : 'text.secondary', fontSize : '14px'}}>{description}</Typography>
                        </Box>
                        <Box sx={{mt:2, height : '2px', width : '300px', bgcolor : 'divider'}}/>
                        <Box sx={{mt :3, mb : 2, display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                            <Box>
                                <Typography sx={{fontSize : '14px', fontWeight:'500'}}>{participantCount}</Typography>
                                <Typography sx={{fontSize : '14px', color : 'text.secondary'}}>Participants</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{fontSize : '14px', fontWeight:'500'}}>{date}</Typography>
                                <Typography sx={{fontSize : '14px', color : 'text.secondary'}}>Due Date</Typography>
                            </Box>
                        </Box>
                    </Box>

                </Paper>
  )
}

export default ProjectComponent
