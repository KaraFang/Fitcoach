import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { workoutOptions, fetchData } from '../Utils/fetchData';
import WorkoutCard from './WorkoutCard';

const Workouts = ({ workouts, setWorkouts, bodyPart }) => {
    const [currentPage, setCurrentPage] =useState(1);
    const workoutsPerPage = 9;

    const indexOfLastWorkout = currentPage * workoutsPerPage;
    const indexOfFirstWorkout = indexOfLastWorkout - workoutsPerPage;
    const currentWorkouts = workouts.slice(indexOfFirstWorkout, indexOfLastWorkout);

    const paginate = (e, value) => {
        setCurrentPage(value);
        const searchResultContainer = document.getElementById("workouts");
        if (searchResultContainer) {
          searchResultContainer.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        const fetchWorkoutsData = async () => {
            let workoutsData = [];

            if(bodyPart === 'all') {
                workoutsData = await fetchData(
                    "https://exercisedb.p.rapidapi.com/exercises",
                    workoutOptions
                );
            } else {
                workoutsData = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                    workoutOptions
                );
            }
            setWorkouts(workoutsData);
        }
        fetchWorkoutsData();
    }, [bodyPart, setWorkouts]);

    return (
      <Box id="workouts" sx={{ mt: { md: "110px" } }} mt="50px" p="30px">
        <Typography color="#D72323" variant="h3" mb="46px">
          Searched Results
        </Typography>
        <Stack
          direction="row"
          sx={{ gap: { md: "70px", xs: "40px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {currentWorkouts.map((workout, index) => (
            <WorkoutCard key={index} workout={workout} />
          ))}
        </Stack>
        <Stack mt="100px" alignItems="center">
          {workouts.length > 9 && (
            <Pagination
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#D72323",
                },
                "& .Mui-selected": {
                  color: "#F5EDED",
                  backgroundColor: "#D72323",
                },
              }}
              defaultPage={1}
              count={Math.ceil(workouts.length / workoutsPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </Stack>
      </Box>
    );
}

export default Workouts