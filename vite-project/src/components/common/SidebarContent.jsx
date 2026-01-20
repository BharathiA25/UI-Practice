import { Box, Icon, Typography } from "@mui/material";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sideBar } from "../../utils/sideBar";
import UserLogo from "./UserLogo";

function SidebarContent() {
  const [openParent, setOpenParent] = useState(null);
  const [openSub, setOpenSub] = useState(null);
  const handleParentToggle = (id) => {
    setOpenParent(openParent === id ? null : id);
    setOpenSub(null);
  };
   const handleSubToggle = (id) => {
    setOpenSub(openSub === id ? null : id)
  };

  return (
    <Box sx={{height : '100vh'}}>
      
      {/* Logo */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: 80,
          alignItems: "center",
        }}
      >
        <img src={Logo} width={78} height={54} />
      </Box>

      {/* Sidebar Items */}
      {sideBar.map((item) => {
        const isParentOpen = openParent === item.id;
        const Icon = item.icon;
        return (
          <Box key={item.id} >
            {/* Parent */}
            <Box
              onClick={() => handleParentToggle(item.id)}
              sx={{
                p:2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                backgroundColor : isParentOpen ? "background.sidebar" : "transparent" ,
              }}
            >
              <Box sx={{display :'flex', alignItems :'center',gap : 1}}>
               {isParentOpen && <ArrowRightIcon/> }
               <Icon fontSize="small" sx={{color : isParentOpen ? "primary.main": "text.primary"}} />
              <Typography  sx={{ color: isParentOpen ? "primary.main" : "text.primary" }} >{item.title}</Typography>
              </Box>
                {isParentOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Box>

            {/* Children */}
            {isParentOpen &&
              item.children.map((sub) => {
                const isSubOpen = openSub ===sub.subId;
                const hasFeatures = sub.features &&  sub.features.length > 0;
                return (
                  <Box key={sub.subId} sx={{ml:2, p:0.8}}>
                    <Typography 
                    onClick ={()=>handleSubToggle(sub.subId) && hasFeatures}
                    sx={{
                      cursor : "pointer",
                      color : isSubOpen ? "primary.main" : "text.secondary",
                      display:'flex'
                    }}>
                      {sub.title} {hasFeatures && (
                        <ArrowRightIcon sx={{
                          transform: isSubOpen ? "rotate(90deg)" : "rotate(0deg)",
                          color: isSubOpen ? "primary.main" : "text.secondary",
                        }}/>
                      )}
                      </Typography>
                      {isSubOpen && 
                      sub.features?.map((feature) => (
                        <Typography key={feature.id}
                        sx={{
                          cursor : 'pointer',
                          color : 'text.secondary',
                          ml:2, 
                          p:0.8
                        }}
                        >
                          {feature.title}
                          </Typography>
                      ))
                      }
                      </Box>
                )
                
      })}
          </Box>
          
        );
      })}
      <Box sx={{mt:50}}>
      <UserLogo name={"Anita Cruz"} email={"anita@commerce.com"} image={"http://placeholder.com"}/>
      </Box>
    </Box>
  );
}

export default SidebarContent;
