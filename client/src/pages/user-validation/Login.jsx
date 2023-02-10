import { useState } from "react";
import { Grid, TextField, Button, Container } from "@mui/material";

const loginValues = { userName: "", passWord: "" };

export default function Login() {
  const [value, setValue] = useState(loginValues);

  return (
    <>
      <Container>
        <form action="submit" method="POST">
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <TextField label="Username" value={loginValues.userName} />
            </Grid>
            <Grid item>
              <TextField label="Password" value={loginValues.passWord} />
            </Grid>
            <Grid item>
              <Button variant="contained">Login</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
