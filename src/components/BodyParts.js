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
        backgroundColor: bodyPart === item ? "#D72323" : "",
        border: "2px solid #D72323",
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        cursor: "pointer",
        gap: "2px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      {/* <FitnessCenterIcon style={{ width: '30px', height: '30px', color: '#D72323' }} />  */}
      <Typography
        fontSize="14px"
        fontWeight="bold"
        textTransform="capitalize"
        sx={{
          color: bodyPart === item ? "#F5EDED" : "#D72323",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: 'center'
        }}
      >
        {item.split(" ").map((word, index) => (
          <React.Fragment key={index}>
            {word}
            <br />
          </React.Fragment>
        ))}
      </Typography>
    </Stack>
  );
}

export default BodyParts