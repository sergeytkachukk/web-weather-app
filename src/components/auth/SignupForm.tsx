import React, { useState, FC, ChangeEvent } from "react";
import { Button, TextField, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { db, signUpWithEmailAndPassword } from "../../firebase/firebaseConfig";
import { WhiteTypography } from "../WhiteTypography";
import { doc, setDoc } from "@firebase/firestore";

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
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 5),
}));

export const SignupForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const createUserProfile = async (userId: string, data: object) => {
    try {
      await setDoc(doc(db, "users", userId), data);
      console.log("User profile created!");
    } catch (error) {
      console.error("Error creating user profile: ", error);
    }
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const userCredential = await signUpWithEmailAndPassword(email, password);
      console.log("User signed up: ", userCredential.user);
      await createUserProfile(userCredential.user.uid, {
        email,
        fullName: "Default Name",
        settings: {},
      });
      navigate("/location-permission");
    } catch (error) {
      console.error("Error signing up: ", error);
      alert("Signup failed. Check console for details.");
    }
  };

  return (
    <FormContainer maxWidth="xs">
      <WhiteTypography variant="h5">Sign Up</WhiteTypography>

      <StyledTextField
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
        value={email}
        onChange={handleChange(setEmail)}
      />

      <StyledTextField
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        value={password}
        onChange={handleChange(setPassword)}
      />

      <StyledTextField
        label="Confirm Password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        value={confirmPassword}
        onChange={handleChange(setConfirmPassword)}
      />

      <StyledButton variant="contained" color="primary" onClick={handleSignup}>
        Sign Up
      </StyledButton>
    </FormContainer>
  );
};
