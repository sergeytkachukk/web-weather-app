import { styled, ThemeProvider } from "@mui/material";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Header } from "./components/Header";
import { LoginForm } from "./components/auth/LoginForm";
import { SignupForm } from "./components/auth/SignupForm";
import { customTheme } from "./theme";
import { MainContent } from "./components/MainContent";
import { LocationPermission } from "./components/LocationPermission";

const AppWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  flex: "1 1 auto",
  maxWidth: "100%",
  minHeight: "100vh",
});

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <AppWrapper>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />

            <Route path="/login" element={<LoginForm />} />

            <Route
              path="/location-permission"
              element={<LocationPermission />}
            />

            <Route path="/signup" element={<SignupForm />} />

            <Route path="/main" element={<MainContent />} />
          </Routes>
        </Router>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
