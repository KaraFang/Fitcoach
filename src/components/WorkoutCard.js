import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';


const workoutCard = ({ workout }) => {
  return (
    <Link
      className="workout-card"
      to={`/workout/${workout.id}`}
    >
      <div className="workout-card-img">
        <img src={workout.gifUrl} alt={workout.name} Loading="lazy" />
      </div>

      <div className="workout-card-info">
        <Stack direction="row">
          <Button
            sx={{
              mr: "5px",
              p: "2px 10px",
              color: "#F5EDED",
              background: "#D72323",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#d72323a8",
              },
            }}
          >
            {workout.bodyPart}
          </Button>
          <Button
            sx={{
              ml: "5px",
              p: "2px 10px",
              color: "#F5EDED",
              background: "#D72323",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#d72323a8",
              },
            }}
          >
            {workout.target}
          </Button>
        </Stack>
        <Typography
          ml="20px"
          color="#D72323"
          fontWeight="bold"
          m="5px 20px"
          textTransform="capitalize"
          fontSize="16px"
        >
          {workout.name}
        </Typography>
      </div>
    </Link>
  );
}

export default workoutCard