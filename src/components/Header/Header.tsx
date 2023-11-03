import React from "react";
import "./Header.css";
import sunLogo from "../../assets/clear.png";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <div className="pageHeader">
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ paddingLeft: 5, paddingTop: 1, paddingBottom: 1 }}
      >
        <Typography variant="h4" mr={2} color='white'>Weather App</Typography>

        <img src={sunLogo} alt="logo" className="imgLogo" />
      </Box>
    </div>
  );
};

export default Header;
