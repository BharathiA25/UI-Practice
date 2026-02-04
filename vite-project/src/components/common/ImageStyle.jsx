import { Box } from '@mui/material'
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.png'
import pic4 from '../../assets/pic4.png'

function ImageStyle({count}) {
  return (
    <Box>
       {count === 3 &&
      <Box sx={{ position: 'relative', height: 25 }}>
        <Box component="img" src={pic2}
    sx={{
      position: 'absolute',
      height: '25px',
      left: 0,
      top: 0,
    }}
  />
  <Box component="img" src={pic3}
    sx={{
      position: 'absolute',
      height: '25px',
      left: 20,
      top: 0,
    }}
  />
  <Box component="img" src={pic4}
    sx={{
      position: 'absolute',
      height: '25px',
      left: 40,
      top: 0,
    }}
  />
</Box>
}
      {count === 4 &&
      <Box sx={{ position: 'relative', height: 50 }}>
        <Box component="img" src={pic1}
    sx={{
      position: 'absolute',
      height: '50px',
      left: 0,
      top: 0,
    }}
  />
  <Box component="img" src={pic2}
    sx={{
      position: 'absolute',
      height: '50px',
      left: 40,
      top: 0,
    }}
  />
  <Box component="img" src={pic3}
    sx={{
      position: 'absolute',
      height: '50px',
      left: 80,
      top: 0,
    }}
  />
  <Box component="img" src={pic4}
    sx={{
      position: 'absolute',
      height: '50px',
      left: 120,
      top: 0,
    }}
  />
</Box>
}
    </Box>
  )
}

export default ImageStyle
