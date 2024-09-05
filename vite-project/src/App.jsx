import * as React from "react";
import "./App.css";

//Material UI

import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import LockIcon from "@mui/icons-material/Lock";
import Switch from "@mui/material/Switch";
import SignUp from "./fromControl/signUp";
import Login from "./fromControl/Login";
import Header from "./Header";
function App() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
    <Header style={{with:'1000px'}}/>
      <Paper elevation={3} style={{ padding: "10px" , width:"350px", textAlign:'center'}}>
        {checked ? (
          <Chip
            icon={<FaceIcon />}
            label="Login"
            color="primary"
            variant="outlined"
          />
        ) : (
          <Chip
            icon={<LockIcon />}
            label="Sign Up"
            color="primary"
            variant="outlined"
          />
        )}
        <br />
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <br />

        {checked ? <Login /> : <SignUp />}
        
      </Paper>
      
    </>
  );
}

export default App;
