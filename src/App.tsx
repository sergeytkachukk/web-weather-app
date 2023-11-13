import { styled } from "@mui/material";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";

const AppWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  flex: "1 1 auto",
  maxWidth: "100%",
  minHeight: "100vh",
  backgroundColor: "#4b515d",
});

const App = () => {
  return (
    <AppWrapper>
      <Header />

      <MainContent />
    </AppWrapper>
  );
};

export default App;
