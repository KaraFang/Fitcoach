import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import Banner from '../assets/images/banner.png';

const HomeIntro = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position="relative" p="20px">
        <Typography color="#D72323" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>

        <Typography color="#F5EDED" fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '40px'}}}
        mb="23px" mt="30px">
            Sweat, Smile <br /> and Repeat
        </Typography>

        <Typography color="#D72323" fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={3}>
            Check out the most effective workouts
        </Typography>

        <Button variant="contained" color="error" href="#workouts"
        sx={{backgroundColor: '#D72323', padding: '15px'}}
        >Explore Workouts
        </Button>

        <Typography
            fontWeight={600} color="#ff2625"
            sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none'}
            }}
            fontSize="200px"
        >Workout
        </Typography>
        <img src={Banner} alt="Kara" className="hero-banner-img" />
    </Box>
  )
}

export default HomeIntro