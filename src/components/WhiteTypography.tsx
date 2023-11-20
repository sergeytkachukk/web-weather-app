import React, { FC } from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

interface WhiteTypographyProps extends TypographyProps {}

export const WhiteTypography: FC<WhiteTypographyProps> = (props) => (
  <Typography {...props} sx={{ color: "#fff" }} />
);
