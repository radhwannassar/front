import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import {  Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Navbar() { 

  const [button, setButton] = useState(true)
  const   user = useContext(UserContext);
 

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  const classes = useStyles();
  window.addEventListener("resize", showButton);
  return (
    <div className="tt">
      <div className="aa">
        <ReactBootStrap.Navbar collapseOnSelect expand="xl">
          <ReactBootStrap.Navbar.Brand href="#home">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/">
              <img src="./logo.png" alt="" width="120px"></img>
            </Link>
        
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto"></ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              {user?.etat ? (
                <>
                  
                    {
                   user?.currentuser  &&user?.currentuser.user?.role==="admin"  && 
                   <>
                 
                   <Link to="/ManageCategories">
                    <ReactBootStrap.Nav.Link href="/ManageCategories">
                      <h1>Categories |</h1>
                    </ReactBootStrap.Nav.Link>
                  </Link>

                   <Link to="/ManageUsers">
                   <ReactBootStrap.Nav.Link href="/ManageUsers">
                     <h1>ManageUsers |</h1>
                   </ReactBootStrap.Nav.Link>
                 </Link> 
                 
                 </> 
                    } 
                  <Link to="/ConnectedHome">
                    <ReactBootStrap.Nav.Link href="/ConnectedHome">
                      <h1 className="hh">Home |</h1>
                    </ReactBootStrap.Nav.Link>
                  </Link>
                  <Link to="/FittingRoom">
                    <ReactBootStrap.Nav.Link href="/FittingRoom">
                      <h1>FittingRoom</h1>
                    </ReactBootStrap.Nav.Link>
                  </Link>
                  <Link to="/Logout">
                    <button type="button" class="btn btn-dark btn-lg">
                      <h1>Sign Out</h1>
                    </button>
                  </Link>
                  {/* <div className={classes.root}>
      <Avatar alt="" src={user.currentuser.user.profileImg} />
      
    </div> */}
                </> 
              ) : (
                <>
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="/Register">
                    <ReactBootStrap.Nav.Link href="/Register">
                      <h1>Register |</h1>
                    </ReactBootStrap.Nav.Link>
                  </Link>
                  <Link to="/Login">
                    <button type="button" class="btn btn-dark btn-lg">
                      <h1>Sign In</h1>
                    </button>
                  </Link>
                </>
              )}
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    </div>
  );
}

export default Navbar;
