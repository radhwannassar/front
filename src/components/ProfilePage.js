import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../prjs/Button.js";
import GridContainer from "../prjs/GridContainer.js";
import GridItem from "../prjs/GridItem.js";
import styles from "../prjs/profilePage";
import { Gallery } from "../HomeComponents/gallery";
import profile from "../prjs/radhwen.jpg";
import "./Register.css";
import { Link } from "react-router-dom";


const useStyles = makeStyles(styles);

export default function ProfilePage() {
    const classes = useStyles();
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
  return (
    <div>
      
      <div className="ppc">
        
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
          
            <GridContainer justify="center">
            <div className="ppb">
            <Link to="/Profile">
        <button type="button" class="btn btn-dark btn-lg"><h1>Edite</h1></button></Link>
        </div>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>foulen fouleni</h3>
                    <br/>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            
          </div>
        </div>
      </div>
      <Gallery />
       
    </div>
  );
}
