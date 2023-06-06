import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { workoutOptions, fetchData } from '../Utils/fetchData';

const Workouts = ({ workouts, setWorkout, bodyPart }) => {
    console.log(workouts);
    
  return (
    <box id="workouts"
        sx={{mt: {lg: '110px'}}}
        mt='50px'
        p='20px'
    >
        <Typography variant='h3' mb='46px'>
            Showing Results
        </Typography>
        <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px'}}}
        flexWrap="wrap" justifyContent="center">
            {workouts.map((workout, index) => (
                <p>{workout.name}</p>
            ))}

        </Stack>
    </box>
  )
}

export default Workouts