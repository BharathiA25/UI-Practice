import { Box, Typography } from "@mui/material"
import CommonButton from "./CommonButton"
function TimeLineCard({Title, bgcolor, DateAndTime,Icon,IconColor,ButtonName1, Buttoncolor1,Textcolor1, ButtonName2, Buttoncolor2,Textcolor2, ButtonCount}) {
  return (
           <Box sx={{display : 'flex',mt:1, gap:2}}>
            <Box sx={{display : 'flex', flexDirection : 'column',alignItems : 'center'}}>
                {typeof Icon==="string"? (
                    <Box
                        component="img"
                        src={Icon}
                       sx={{ width: 30, height: 30 }}
                    />
                ) : (
                        <Icon sx={{color : IconColor , fontSize : '30px'}}/>
                )
            }
                
                <Box sx={{width : '1px', height : '140px', bgcolor : 'divider'}}/>
            </Box>
            <Box>
                {bgcolor ? (<Typography variant='h5' sx={{color : 'text.default'}}>{Title}</Typography>) : (<Typography variant='h5'>{Title}</Typography>)}
                <Typography sx={{color : 'text.secondary', fontSize:'12px',mt:'2px'}}>{DateAndTime}</Typography>
                <Typography sx={{color : 'text.secondary', fontSize:'14px',mt:'2px'}}>People care about how you see the world, how you <br/>think, what motivates you, what you’re struggling with<br/> or afraid of.</Typography>
                {ButtonCount === 1 &&
                <Box sx={{mt:2}}>
                <CommonButton ButtonName={ButtonName1} Buttoncolor={Buttoncolor1} Textcolor={Textcolor1}/>
                </Box>
                }
                {ButtonCount === 2 &&
                <Box sx={{mt:2, display : 'flex', gap :2}}>
                <CommonButton ButtonName={ButtonName1} Buttoncolor={Buttoncolor1} Textcolor={Textcolor1}/>
                <CommonButton ButtonName={ButtonName2} Buttoncolor={Buttoncolor2} Textcolor={Textcolor2}/>
                </Box>
                }
            </Box>
        </Box>
  )
}

export default TimeLineCard
