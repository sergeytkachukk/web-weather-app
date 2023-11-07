import {
  Box,
  createTheme,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";
import sunLogo from "../../assets/clear.png";

const customHeaderTheme = createTheme({
  palette: {
    primary: {
      main: "#778899",
    },
  },
});

const HeaderWrapper = styled("div")(({ theme }) => ({
  marginTop: 0,
  backgroundColor: theme.palette.primary.main,
  boxShadow: theme.shadows[5],
}));

const StyledImage = styled("img")({
  width: 100,
  height: 100,
  marginLeft: 20,
});

const Header = () => {
  return (
    <ThemeProvider theme={customHeaderTheme}>
      <HeaderWrapper className="pageHeader">
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ paddingLeft: 5, paddingTop: 1, paddingBottom: 1 }}
        >
          <Typography variant="h4" mr={2} color="white">
            Weather App
          </Typography>

          <StyledImage src={sunLogo} alt="sunLogo" />
        </Box>
      </HeaderWrapper>
    </ThemeProvider>
  );
};

export default Header;
