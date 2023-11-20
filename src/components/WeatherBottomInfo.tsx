import React, { FC } from "react";
import Box from "@mui/material/Box";
import { WhiteTypography } from "./WhiteTypography";

interface IProps {
  title: string;
  value: string;
}

export const WeatherBottomInfo: FC<IProps> = ({ title, value }) => (
  <Box>
    <WhiteTypography>{title}</WhiteTypography>
    <WhiteTypography>{value}</WhiteTypography>
  </Box>
);
