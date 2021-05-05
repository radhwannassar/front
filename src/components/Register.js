import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./Register.css";
import MenuItem from "@material-ui/core/MenuItem";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import axios from "axios";



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Register = () => {
  
  const  uuser = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [skincolor, setSkinColor] = useState("");
  const [profileImg, setprofileImg] = useState(null);
  const history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const user =  new FormData();
    user.append("firstName",firstName);
    user.append("lastName",lastName); 
    user.append("email",email);
    user.append("password",password); 
    user.append("gender",gender); 
    user.append("size",size);
    user.append("weight",weight); 
    user.append("skincolor",skincolor); 
    user.append("profileImg",profileImg); 
      
    axios.post("/users",user).then(res=>console.log("success ")) 
    
  };
// fetch("/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // }).then((response) => {
    //   response.json()

    //     .then((response) => { 
    //       uuser.setEtat(true)
        
    //     });
    // });
    // history.push("/");
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
          action="/action_page.php"
          class="needs-validation"
          novalidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                id="outlined-select-currency"
                select
                fullWidth
                name="Gender"
                label="Select"
                helperText="Please select your Gender"
                variant="outlined"
              >
                
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                
              </TextField>
            </Grid>
            <div class="row">
              <div class="col">
                <Grid item xs={12}>
                  <TextField
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                    name="wheight"
                    label="weight"
                    id="weight"
                    autoComplete="weight"
                  />
                </Grid>
              </div>
              <div class="col">
                <Grid item xs={12}>
                  <TextField
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                    name="size"
                    label="size"
                    id="size"
                    autoComplete="size"
                  />
                </Grid>
              </div>
              <div class="col">
                <Grid item xs={12}>
                  <TextField
                    value={skincolor}
                    onChange={(e) => setSkinColor(e.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                    name="skincolor"
                    label="skincolor"
                    id="skincolor"
                    autoComplete="skincolor"
                  />
                </Grid>
              </div>
            </div>

            <Grid item xs={12}>
            <input
                    required
                    type="file"
                    
                    onChange={(e) => setprofileImg(e.target.files[0])}
                    name="picture"
                  ></input>
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Register;
