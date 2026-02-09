import React from 'react'
import { Box } from '@mui/material'
import SidebarContent from '../components/common/SidebarContent'
import ToolBar from '../components/common/ToolBar'
import AllprojectPage from './AllprojectPage'

function MainPage() {
  return (
    <Box
    sx={{
        display : 'grid',
        gridTemplateColumns : "218px 1fr",
        gridTemplateRows:"60px 1fr",
        height:'100vh'
    }}>
        <Box sx={{
            gridRow:"1/3",
            backgroundColor : "background.paper"
        }}>
            <SidebarContent/>   
            </Box>
    <Box
        sx={{
          gridColumn: "2 / 3",
          backgroundColor: "background.default",
        }}
      >
        <ToolBar name={"Project"} subname={"New project"} />
      </Box>            
        <Box
        sx={{
          gridColumn: "2 / 3",
          gridRow: "2 / 3",
          p: 2,
          backgroundColor: "background.default",
          overflowY: "auto",
        }}
      >
        <AllprojectPage />
      </Box>

    </Box>
  )
}

export default MainPage
