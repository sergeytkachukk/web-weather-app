import { Box, styled, Typography } from "@mui/material";
import { ReactComponent as clearDay } from "../assets/clear-day.svg";

const HeaderWrapper = styled(Box)(({ theme }) => ({
  marginTop: 0,
  backgroundColor: theme.palette.primary.light,
  boxShadow: theme.shadows[5],
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: theme.spacing(1, 0, 1, 5),
}));

const IconStyling = styled(clearDay)({
  width: 100,
  height: 100,
  marginLeft: 20,
});

export const Header = () => {
  return (
    <HeaderWrapper className="pageHeader">
      <Typography variant="h4" mr={2} color="white">
        Weather App
      </Typography>

      <IconStyling />
    </HeaderWrapper>
  );
};
