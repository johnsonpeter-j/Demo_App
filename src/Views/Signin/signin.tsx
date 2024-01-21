import { Box, Button, FormHelperText, Grid, TextField } from "@mui/material";
import { useState } from "react";
import {
  SignInErrorState,
  SignInField,
} from "../../Interface/signin.interface";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [inputField, setInputField] = useState<SignInField>({
    username: "",
    password: "",
  });
  const [errorState, setErrorState] = useState<SignInErrorState>({
    username: false,
    password: false,
  });

  const inputFieldChangeHandler = (key: string, value: string) => {
    if (key === "username") {
      setErrorState((prevState: SignInErrorState) => {
        return {
          ...prevState,
          username: false,
        };
      });

      setInputField((prevState: SignInField) => {
        return {
          ...prevState,
          username: value,
        };
      });
    } else if (key === "password") {
      setErrorState((prevState: SignInErrorState) => {
        return {
          ...prevState,
          password: false,
        };
      });

      setInputField((prevState: SignInField) => {
        return {
          ...prevState,
          password: value,
        };
      });
    }
  };

  const signInHandler = () => {
    const tempErrorState: SignInErrorState = {
      username:
        inputField.username.trim() === "" ||
        inputField.username === null ||
        inputField.username === undefined,
      password:
        inputField.password.trim() === "" ||
        inputField.password === null ||
        inputField.password === undefined,
    };

    if (tempErrorState.username || tempErrorState.password) {
      setErrorState(tempErrorState);
    } else {
      navigate("/home");
    }
  };

  return (
    <Box className="full-div">
      <Grid container xs={12} xl={12} md={12} sm={12}>
        <Grid item xs={6} xl={6} md={6} sm={6}></Grid>
        <Grid item xs={6} xl={6} md={6} sm={6} style={{ padding: "0px 20px" }}>
          <Grid item xs={12} xl={12} md={12} sm={12}>
            <p className="input-lable">
              Username <span className="mandatory">*</span>
            </p>
            <TextField
              fullWidth
              inputProps={{ className: "input-field" }}
              size="small"
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter username"
              onChange={(
                event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => {
                inputFieldChangeHandler("username", event.target.value ?? "");
              }}
            />
            <FormHelperText className="error-text" id="component-error-text">
              {errorState.username ? "Username field is required" : " "}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} xl={12} md={12} sm={12}>
            <p className="input-lable">
              Password <span className="mandatory">*</span>
            </p>
            <TextField
              fullWidth
              inputProps={{ className: "input-field" }}
              size="small"
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter password"
              onChange={(
                event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => {
                inputFieldChangeHandler("password", event.target.value ?? "");
              }}
            />
            <FormHelperText className="error-text" id="component-error-text">
              {errorState.password ? "Password field is required" : " "}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} xl={12} md={12} sm={12}>
            <Button
              className="btn-style"
              fullWidth
              variant="contained"
              onClick={signInHandler}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signin;
