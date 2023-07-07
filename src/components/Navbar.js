import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "space-between",
      }}
      px="30px"
    >
      <Link to="/">
        <FitnessCenterIcon
          style={{
            width: "48px",
            height: "48px",
            padding: "5px",
            color: "#D72323",
            border: "2px solid #D72323",
            borderRadius: "50%",
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="center">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#D72323",
          }}
        >
          Home
        </Link>
        <a
          href="#workouts"
          style={{ 
            textDecoration: "none",
            color: "#D72323",
          }}
        >
          Workouts
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar