import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { workoutOptions, fetchData } from '../Utils/fetchData';
import WorkoutCard from './WorkoutCard';

const Workouts = ({ workouts, setWorkout, bodyPart }) => {
    const [currentPage, setCurrentPage] =useState(1);
    const workoutsPerPage = 9;

    const indexOfLastWorkout = currentPage * workoutsPerPage;
    const indexOfFirstWorkout = indexOfLastWorkout - workoutsPerPage;
    const currentWorkouts = workouts.slice(indexOfFirstWorkout, indexOfLastWorkout);

    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' })

    }

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
            {currentWorkouts.map((workout, index) => (
                <WorkoutCard key={index} workout={workout} />
            ))}

        </Stack>
        <Stack mt="100px" alignItems="center">
                {workouts.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(workouts.length / workoutsPerPage)}
                        page={currentPage}
                        onChange={(paginate)}
                        size="large"
                    />
                )}

        </Stack>
    </box>
  )
}

export default Workouts