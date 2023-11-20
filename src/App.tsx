import { styled, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { customTheme } from "./theme";

const AppWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: "1 1 auto",
  maxWidth: "100%",
  minHeight: "100vh",
  backgroundColor: theme.palette.primary.main,
}));

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <AppWrapper>
        <Header />

        <MainContent />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
