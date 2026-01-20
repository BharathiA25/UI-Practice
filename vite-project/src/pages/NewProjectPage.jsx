import { Box, Typography } from '@mui/material'
import React from 'react'
import ProjectForm from '../components/forms/ProjectForm'

function NewProjectPage() {
  return (
    <Box sx={{display : 'flex', alignItems : 'center', justifyContent:'center'}}>
    <Box sx={{display:'flex', flexDirection : 'column',height : '100%', width : '70%', backgroundColor : 'background.paper',gap : 2}}>
        <Box sx={{display : 'flex', flexDirection : 'column',gap:1,p:2}}>
            <Typography variant='h5'>New Project</Typography>
            <Typography sx={{color : 'text.secondary'}}>Create new project</Typography>
        </Box>
        <ProjectForm/>
    </Box>
    </Box>
  )
}

export default NewProjectPage
