import React, { FC } from "react";
import { Box, styled } from "@mui/material";
import { WhiteTypography } from "./WhiteTypography";

const ErrorWrapper = styled(Box)(({ theme }) => ({
  borderRadius: 15,
  padding: theme.spacing(2.5),
  width: 400,
  height: 100,
  backgroundColor: "#4682b4",
}));

interface IProps {
  message: string;
}

export const ErrorCard: FC<IProps> = ({ message }) => {
  return (
    <ErrorWrapper>
      <WhiteTypography variant="h5">Oops! Something went wrong</WhiteTypography>

      <WhiteTypography>{message}</WhiteTypography>
    </ErrorWrapper>
  );
};
