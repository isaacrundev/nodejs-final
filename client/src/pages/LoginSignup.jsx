import { useState } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import Login from "./components/login";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const signUpValues = {
  userName: "",
  email: "",
  passWord: "",
  confirmPassWord: "",
};

export default function LoginSignup() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Login" {...a11yProps(0)} />
              <Tab label="Sign Up" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Login />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <form action="submit" method="POST">
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <TextField label="Username" value={signUpValues.userName} />
                </Grid>{" "}
                <Grid item>
                  <TextField label="Email" value={signUpValues.email} />
                </Grid>
                <Grid item>
                  <TextField label="Password" value={signUpValues.passWord} />
                </Grid>{" "}
                <Grid item>
                  <TextField
                    label="Confirm Password"
                    value={signUpValues.confirmPassWord}
                  />
                </Grid>
                <Grid item>
                  <Button variant="contained">SIGN UP</Button>
                </Grid>
              </Grid>
            </form>
          </TabPanel>
        </Box>
      </Paper>
    </>
  );
}
