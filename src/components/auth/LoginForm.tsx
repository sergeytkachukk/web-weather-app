import React, { useState, FC } from "react";
import {
  Button,
  TextField,
  Container,
  Box,
  Typography,
  styled,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { WhiteTypography } from "../WhiteTypography";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithPopUp } from "../../firebase/firebaseConfig";

const FormContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(8),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& fieldset": {
    borderRadius: 10,
  },
  "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.error.main,
  },
}));

const ButtonsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
  marginTop: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 5),
}));

export const LoginForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in: ", userCredential.user);
      navigate("/main");
    } catch (error) {
      setError("Login or password is incorrect");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithPopUp();
      console.log("User logged in with Google: ", userCredential.user);
      navigate("/main");
    } catch (error) {
      setError("Login with Google failed");
    }
  };

  return (
    <FormContainer maxWidth="xs">
      <WhiteTypography variant="h5">Login</WhiteTypography>

      {error && (
        <Typography color="error" sx={{ marginTop: 2 }}>
          {error}
        </Typography>
      )}

      <StyledTextField
        error={!!error}
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
        value={email}
        onChange={handleEmailChange}
      />

      <StyledTextField
        error={!!error}
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        value={password}
        onChange={handlePasswordChange}
      />

      <ButtonsWrapper>
        <StyledButton variant="contained" color="primary" onClick={handleLogin}>
          Login
        </StyledButton>

        <StyledButton
          variant="contained"
          color="primary"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </StyledButton>
      </ButtonsWrapper>

      <StyledButton
        startIcon={<GoogleIcon sx={{ color: "white" }} />}
        variant="outlined"
        onClick={handleGoogleLogin}
        sx={{ marginTop: 2 }}
      >
        <WhiteTypography>Continue with Google</WhiteTypography>
      </StyledButton>
    </FormContainer>
  );
};
