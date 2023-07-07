import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';


const workoutCard = ({ workout }) => {
  return (
    <Link className="workout-card" to={`/workout/${workout.id}`} style={{ background: '#3E3636' }}>
        <img src={workout.gifUrl} alt={workout.name} Loading="lazy" />
        <Stack direction="row" mt="15px">
            <Button sx={{ ml: '20px', px: '10px', py: '2px', color: '#F5EDED', background: '#D72323',
            fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', "&:hover": {
      backgroundColor: '#d72323a8' }}}
            >
                {workout.bodyPart}
            </Button>
            <Button sx={{ ml: '20px', px: '10px', py: '2px', color: '#F5EDED', background: '#D72323',
            fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', "&:hover": {
      backgroundColor: '#d72323a8' }}}
            >
                {workout.target}
            </Button>
        </Stack>
        <Typography ml='20px' color='#D72323' fontWeight='bold' mt='3px' pb='10px'
        textTransform='capitalize' fontSize='16px'>
            {workout.name}
        </Typography>
    </Link>
  )
}

export default workoutCard