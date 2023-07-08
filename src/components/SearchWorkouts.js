import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField } from '@mui/material';

import { workoutOptions, fetchData } from '../Utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchWorkouts = ({ setWorkouts, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);
  
    useEffect(() => {
      const fetchWorkoutsData = async () => {
        const bodyPartsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          workoutOptions
        );

        setBodyParts(["all", ...bodyPartsData]);
      };

      fetchWorkoutsData();
    }, []);
  
    const handleSearch = async () => {
      if (search) {
        const workoutsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          workoutOptions
        );

        const searchedWorkouts = workoutsData.filter(
          (item) =>
            item.name.toLowerCase().includes(search) ||
            item.target.toLowerCase().includes(search) ||
            item.equipment.toLowerCase().includes(search) ||
            item.bodyPart.toLowerCase().includes(search)
        );

        setSearch("");
        setWorkouts(searchedWorkouts);
      }
    };

    return (
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Box position="relative" mb="72px">
          <TextField
            sx={{
              input: {
                fontWeight: "500",
                fontSize: "24px",
                border: "none",
                color: "#F5EDED",
              },
              width: { lg: "600px", xs: "350px" },
              "& .MuiInputBase-root": {
                height: 53,
              },
              height: "50px",
              borderRadius: "6px",
              border: "1px solid #D72323",
              "& .MuiOutlinedInput": {
                "& > fieldset": {
                  height: "53px",
                },
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  boxShadow: "0px 0px 5px 3px #D72323",
                  border: "#D72323",
                  height: "53px",
                },
              },
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Workouts"
            type="text"
          />
          <Button
            className="search-btn"
            sx={{
              backgroundColor: "#D72323",
              color: "#000000",
              borderRadius: "0 6px 6px 0",
              textTransform: "none",
              width: { lg: "100px", xs: "80px" },
              height: "50px",
              position: "absolute",
              right: "0px",
              fontSize: { lg: "20px", xs: "14px" },
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
        <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </Box>
      </Stack>
    );
}

export default SearchWorkouts