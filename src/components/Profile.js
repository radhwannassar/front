import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router";
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "./Register.css";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

    const Profile =()=> {
    const uuser = useContext(UserContext);
    console.log(uuser.currentuser.user._id
      );
    
  

    const { _id } = useParams();
    const [type, setType] = useState()
    const [name, setName] = useState("");
    const [firstName, setFirstName] =useState(uuser.currentuser.user.firstName);
    const [lastName, setLastName] = useState(uuser.currentuser.user.lastName);
    const [email, setEmail] = useState(uuser.currentuser.user.email);
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState(uuser.currentuser.user.role);
    const [size, setSize] = useState(uuser.currentuser.user.size);
    const [weight, setWeight] = useState(uuser.currentuser.user.weight);
    const [skincolor, setSkinColor] = useState(uuser.currentuser.user.skincolor);
    const [profileImg, setprofileImg] = useState(uuser.currentuser.user.skincolor);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const user =  new FormData();
      user.append("firstName",firstName);
      user.append("lastName",lastName); 
      user.append("email",email);
      user.append("gender",gender); 
      user.append("size",size);
      user.append("weight",weight); 
      user.append("skincolor",skincolor); 
      user.append("profileImg",profileImg); 
        
      axios.put("/users/"+uuser.currentuser.user._id,user).then(res=>console.log("success ")) 
      
    };
   
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   const userr = {
    //     firstName,
    //     lastName,
    //     email,
    //     weight,
    //     size,
    //     skincolor,
    //   }
    //   console.log(userr);
    //   fetch("/users/" + user.currentuser.user._id,{
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(userr),
    //   }).then((response) => {
    //     console.log(response.status);
    //   });
    // };


    
    const classes = useStyles();
  return (
    <div>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} class="needs-validation" novalidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                defaultValue={uuser.currentuser.user.firstName}
                onChange={(e)=> setFirstName(e.target.value)}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                label="firstName"
                id="firstName"
                value={firstName}
                
              />
              
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                defaultValue={uuser.currentuser.user.lastName}
                onChange={(e)=> setLastName(e.target.value)}
                // onChange ={(e)=> setLastName(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                defaultValue={uuser.currentuser.user.email}
                // onChange={(e)=> setEmail(e.target.value)}
                onChange ={(e)=>setEmail(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
              />
            </Grid>


            
            <div class="row">
              <div class="col">
                <Grid item xs={12}>
                  <TextField
                    defaultValue={uuser.currentuser.user.weight}
                    onChange={(e)=> setWeight(e.target.value)}
                    // onChange={(e)=>setWheight(e.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                    name="weight"
                    label="weight"
                    value={weight}
                    id="weight"
                    autoComplete="weight"
                  />
                </Grid>
              </div>
              <div class="col">
                <Grid item xs={12}>
                  <TextField
                    defaultValue={uuser.currentuser.user.size}
                    onChange={(e)=> setSize(e.target.value)}
                    // onChange={(e)=>setSize(e.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                    name="size"
                    label="size"
                    id="size"
                    autoComplete="size"
                    value={size}
                  />
                </Grid>
              </div>
              <div class="col">
                <Grid item xs={12}>
                  <TextField
                    defaultValue={uuser.currentuser.user.skincolor}
                    onChange={(e)=> setSkinColor(e.target.value)}
                    // onChange={(e)=>setSkinColor(e.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                    name="skincolor"
                    label="skincolor"
                    id="skincolor"
                    autoComplete="skincolor"
                    value={skincolor}
                  />
                </Grid>
                </div>
                <div class="col">
                <Grid item xs={12}>
                  <TextField
                  files
                    defaultValue={uuser.currentuser.user.profileImg}
                   onChange={(e) => setprofileImg(e.target.files[0])}
                    // onChange={(e)=>setSkinColor(e.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                    name="profileimg"
                    label="profileimg"
                    id="profileimg"
                    autoComplete="profileimg"
                    
                  />
                </Grid>
                </div>
                
            </div>
                
                
              
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
            Update
          </Button>
          <Grid container justify="flex-end">
          </Grid>
        </form>
      </div>
      
    </Container>
    <div>
      
    </div>
    </div>
  );

};
export default Profile;