import React, { useState } from 'react'
import InputField from '../common/InputField'
import { Box, Typography, Grid} from '@mui/material'
import { useFormik } from "formik";
import CloudDownloadSharpIcon from '@mui/icons-material/CloudDownloadSharp';
import CommonButton from '../common/CommonButton';
function ProjectForm() {
     const formik = useFormik({
        initialValues: {
            projectName: "",
            projectTitle: "",
            projectTags: "",
            startDate: "",
            endDate:"",
            uploads: "",
        },
        onSubmit: (values) => {
            console.log("Project Data :", values);
        },
    });
  return (
    <Box
    component="form"
    onSubmit={formik.handleSubmit} >
    <Grid container spacing={3} px={12}>  
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 }}>Project Name</Typography>
              <InputField
                 type="text"
                name="projectName"
                value={formik.values.projectName}
                onChange={formik.handleChange}
      />
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 }}>Project Title</Typography>
              <InputField
                 type="text"
                name="projectTitle"
                value={formik.values.projectTitle}
                onChange={formik.handleChange}
      />
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 }}>Project Tags</Typography>
              <InputField
                 type="text"
                 placeholder="Choice 1"
                name="projectTags"
                value={formik.values.projectTags}
                onChange={formik.handleChange}
      />
        </Grid>
        <Grid item xs={12} md ={6}/>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 }}>Start Date</Typography>
              <InputField
                 type="text"
                placeholder="Please Select Start Date"
                name="startDate"
                value={formik.values.startDate}
                onChange={formik.handleChange}
      />
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 }}>End Date</Typography>
              <InputField
                 type="text"
                placeholder="Please Select End Date"    
                name="endDate"
                value={formik.values.endDate}
                onChange={formik.handleChange}
      />
        </Grid>
     </Grid>   
     
        <Box  sx={{ display: "flex", flexDirection: "column",m:4, backgroundColor : 'divider', border: '1px', borderRadius:'8px',p:2 }}>
            <Typography>Starting File</Typography>
            <Box  sx={(theme)  =>({
                display : 'flex', flexDirection :'column', justifyContent : 'center', alignItems :'center',m:2,p:3, borderRadius : '8px', border : '4px solid transparent', borderImage : `repeating-linear-gradient(45deg,${theme.palette.primary.main} 0px 8px, transparent 8px 16px ) 1`,cursor : 'pointer'
            })}>
            <CloudDownloadSharpIcon sx={{color :'primary.main' }}/>
            <Typography> <Box 
                component="span"
                sx={{color : 'primary.main', cursor :'pointer'}}> Click to upload </Box>{" "} or drag and drop</Typography>
            <Typography>SVG, PNG, JPG or GIF</Typography>
            <Typography sx={{color : 'text.secondary'}}>(max, 800*400px)</Typography>
            </Box>
            <Box>
            </Box>

        </Box >
        <Box sx={{ display: "flex", justifyContent:'flex-end', gap: 2, m:1 }}>
            <CommonButton ButtonName={"Cancel"} Buttoncolor={"none"} Textcolor={"primary.main"}/>
            <CommonButton ButtonName={"Create Project"} Buttoncolor={"primary.main"} Textcolor={"text.default"}/>
        </Box>

        </Box>
  )
}

export default ProjectForm