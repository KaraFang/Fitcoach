import React, { useState } from 'react';
import { Box } from '@mui/material';

import HomeIntro from '../components/HomeIntro';
import SearchWorkouts from '../components/SearchWorkouts';
import Workouts from '../components/Workouts';

const Home = () => {
  return (
    <Box>
        <HomeIntro />
        <SearchWorkouts />
        <Workouts />
    </Box>
  )
}

export default Home