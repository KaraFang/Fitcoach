import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => (
  <Box
    mt="80px"
    bgcolor="#D72323"
    width="100%"
    position="fixed"
    bottom="0"
    left="0"
  >
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
    >
      {/* <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} /> */}
    </Stack>
    <Typography
      variant="h5"
      color="#F5EDED"
      sx={{ fontSize: { lg: "20px", xs: "16px" } }}
      textAlign="center"
      py="10px"
    >
      © Copyright 2023 FitCoach. | All Rights Reserved.
    </Typography>
  </Box>
);

export default Footer;
