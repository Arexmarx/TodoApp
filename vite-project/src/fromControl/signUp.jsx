import * as React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  // Inputs
  const [userNameInput, setUserNameInput] = React.useState();
  const [emailInput, setEmailInput] = React.useState();
  const [passwordInput, setPasswordInput] = React.useState();

  //Inputs Error
  const [userNameError, setUserNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  // Overall Form Validity
  const [formValid, setFormValid] = React.useState();
  const [success, setSuccess] = React.useState();

  //Validation for on Blur Username
  const handleUsername = () => {
    if (
      !userNameInput ||
      userNameInput.length < 5 ||
      userNameInput.length > 20
    ) {
      setUserNameError(true);
      return;
    }
    setUserNameError(false);
  };
  //Validation for on Blur Email
  const handleEmail = () => {
    console.log(isEmail(emailInput));
    if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };
  //Validation for on Blur Password
  const handlePassword = () => {
    if (
      !passwordInput ||
      passwordInput.length < 5 ||
      passwordInput.length > 20
    ) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(null)
    if (userNameError || !userNameInput) {
      setFormValid(
        "Username is set btw 5 - 15 characters long. Please Re-Enter"
      );
      return;
    }

    if (emailError || !emailInput) {
      setFormValid("Email is Invalid. Please Re-Enter");
      return;
    }

    if (passwordError || !passwordInput) {
      setFormValid(
        "Password is set btw 5 - 20 characters long. Please Re-Enter"
      );
      return;
    }
    setFormValid(null);
    setSuccess("Form Submitted Successfully");
    console.log(userNameInput);
    console.log(emailInput);
    console.log(passwordInput);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div>
        <TextField
          label={"User Name"}
          id="margin-none-1"
          fullWidth
          value={userNameInput}
          onChange={(e) => setUserNameInput(e.target.value)}
          error={userNameError}
          onBlur={handleUsername}
          
        />
      </div>
      <div>
        <TextField
          label={"Email"}
          id="margin-none-2"
          fullWidth
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          error={emailError}
          onBlur={handleEmail}
          sx={{mt: 1}}
        />
      </div>
      <div>
        <FormControl sx={{mt: 1}} variant="outlined" fullWidth>
          <InputLabel
            error={passwordError}
            htmlFor="outlined-adornment-password"
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            error={passwordError}
            onBlur={handlePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <div>
        <Button
          onClick={handleSubmit}
          variant="contained"
          startIcon={<LoginIcon />}
          fullWidth
          sx={{mt: 1}}
        >
          Sign Up
        </Button>
      </div>

      {formValid && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Alert severity="error" size="small">
            {formValid}
          </Alert>
        </Stack>
      )}
      {success && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Alert severity="success" size="small">
            {success}
          </Alert>
        </Stack>
      )}
    </>
  );
}
