import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { workoutOptions, fetchData } from '../Utils/fetchData';
import Detail from '../components/Detail';
import SimilarWorkouts from '../components/SimilarWorkouts';

const WorkoutDetails = () => {
  return (
        <Box>
            <Detail />
            <SimilarWorkouts />
        </Box>
    )
}

export default WorkoutDetails