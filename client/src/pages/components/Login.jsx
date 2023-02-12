import { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

const loginValues = { userName: "", passWord: "" };

export default function Login() {
  const [inputValues, setInputValues] = useState(loginValues);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <>
      <form>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <TextField
              label="Username"
              name="userName"
              onChange={changeHandler}
              value={inputValues.userName}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Password"
              name="passWord"
              onChange={changeHandler}
              value={inputValues.passWord}
            />
          </Grid>
          <Grid item>
            <Button variant="contained">LOGIN</Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
