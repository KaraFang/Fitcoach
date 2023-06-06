import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';


const workoutCard = ({ workout }) => {
  return (
    <Link className="workout-card" to={`/workout/${workout.id}`}>
        <img src={workout.gifUrl} alt={workout.name} Loading="lazy" />
        <Stack direction="row">
            <Button sx={{ ml: '21px', color: '#fff', background: '#ffa9a9',
            fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}
            >
                {workout.bodyPart}
            </Button>
            <Button sx={{ ml: '21px', color: '#fff', background: '#fcc757',
            fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}
            >
                {workout.target}
            </Button>
        </Stack>
        <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px'
        textTransform='capitalize' fontSize='22px'>
            {workout.name}
        </Typography>
    </Link>
  )
}

export default workoutCard