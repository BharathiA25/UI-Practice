import { Box ,Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
function Device({mobileName , description}) {
    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box >
                    <Typography variant='h5'>{mobileName}</Typography>
                    <Typography sx={{ color: 'text.secondary', mt: 0.5 }}>{description}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CircleIcon sx={{ height: 9, width: 9 }} />
                    <CircleIcon sx={{ height: 9, width: 9 }} />
                    <CircleIcon sx={{ height: 9, width: 9 }} />
                </Box>
            </Box>
        </Box>
    )
}

export default Device
