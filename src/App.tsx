import { styled } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import SearchForm from "./components/Search/SearchForm";

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

      <SearchForm />
    </AppWrapper>
  );
};

export default App;
