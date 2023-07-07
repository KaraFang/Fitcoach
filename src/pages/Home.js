import React, { useState } from 'react';
import { Box } from '@mui/material';

import HomeIntro from '../components/HomeIntro';
import SearchWorkouts from '../components/SearchWorkouts';
import Workouts from '../components/Workouts';

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [workouts, setWorkouts] = useState([]);
  
    return (
      <Box>
        <HomeIntro />
        <SearchWorkouts
          setWorkouts={setWorkouts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Workouts
          workouts={workouts}
          setWorkouts={setWorkouts}
          bodyPart={bodyPart}
        />
      </Box>
    );
}

export default Home