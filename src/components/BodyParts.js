import React from 'react'
import { Stack, Typography } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const BodyParts = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            borderTop: bodyPart === item ? '4px solid #D72323' : '',
            backgroundColor: '#3E3636',
            borderRadius: '20px',
            width: '110px',
            height: '100px',
            cursor: 'pointer',
            gap: '2px'
        }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
        }}
    >
        <FitnessCenterIcon style={{ width: '40px', height: '40px', color: '#D72323' }} /> 
        <Typography fontSize="16px" fontWeight="bold" color="#D72323" textTransform="capitalize">{item}
        </Typography>
    </Stack>
  )
}

export default BodyParts