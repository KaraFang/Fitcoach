import React from 'react'
import { Box, Typography, Button, Stack } from '@mui/material';
import Banner from '../assets/images/banner.png';


const HomeIntro = () => {
  return (
    <Box
      sx={{
        mt: { lg: "50px", xs: "30px" },
        position: "relative",
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 1) 100%), url(${Banner})`,
        backgroundSize: "auto 100%",
        backgroundPosition: "top left",
        backgroundRepeat: "no-repeat",
      }}
      position="relative"
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        sx={{ marginLeft: "60%" }}
      >

        <Typography
          color="#D72323"
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          mb="23px"
          mt="30px"
        >
          Sweat, Smile <br /> and Repeat
        </Typography>

        <Typography
          color="#D72323"
          fontSize="22px"
          lineHeight="35px"
          mb={3}
        >
          Check out the most effective workouts
        </Typography>

        <Button
          variant="contained"
          color="error"
          href="#workouts"
          sx={{ backgroundColor: "#D72323", padding: "15px" }}
        >
          Explore Workouts
        </Button>

        <Typography
          fontWeight={600}
          color="#ff2625"
          sx={{
            opacity: 0.1,
            display: { lg: "block", xs: "none" },
          }}
          fontSize="200px"
        >
          Workout
        </Typography>
      </Stack>
    </Box>
  );
}

export default HomeIntro