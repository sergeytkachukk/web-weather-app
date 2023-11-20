import { Box, styled, Typography } from "@mui/material";
import React, { FC } from "react";

const ErrorWrapper = styled(Box)(({ theme }) => ({
  borderRadius: 15,
  padding: theme.spacing(2.5),
  width: 400,
  height: 100,
  backgroundColor: "#6495ed",
}));

interface IProps {
  message: string;
}

export const ErrorCard: FC<IProps> = ({ message }) => {
  return (
    <ErrorWrapper>
      <Typography variant="h5">Oops! Something went wrong</Typography>

      <Typography>{message}</Typography>
    </ErrorWrapper>
  );
};
