import React from 'react'
import { Box, Typography, Button, Stack } from '@mui/material';
import Banner from '../assets/images/banner.png';


const HomeIntro = () => {
  return (
    <Box
      sx={{
        mt: { md: "50px", xs: "30px" },
        position: "relative",
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 1) 100%), url(${Banner})`,
        backgroundSize: "auto 100%",
        backgroundPosition: "top left",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
      position="relative"
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-end"
        sx={{
          marginRight: "30px",
        //   marginLeft: "auto",
        }}
      >
        <Typography
          color="#F5EDED"
          fontWeight={700}
          sx={{ fontSize: { md: "80px", sm: "40px", xs: "30px" } }}
          mb="20px"
          mt="50px"
        >
          It's time to <br /> Sweat!
        </Typography>

        {/* <Button
          variant="contained"
          color="error"
          href="#workouts"
          sx={{ backgroundColor: "#D72323", padding: "15px" }}
        >
          Explore Workouts
        </Button> */}

        <Typography
          fontWeight={600}
          color="#D72323"
          sx={{
            opacity: 0.1,
            fontSize: { md: "180px", sm: "80px", xs: "60px" },
            display: { md: "block", xs: "block" },
          }}
        >
          Workout
        </Typography>
      </Stack>
    </Box>
  );
}

export default HomeIntro