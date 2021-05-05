import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import "./Cards.css";
import { useParams } from "react-router";
import "react-responsive-combo-box/dist/index.css";
import { UserContext } from "../UserContext";
import { useContext } from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Item_management = () => {
  const [data, setData] = useState([]);
  const [itemName, setitemName] = useState([]);
  const [itemImg, setitemImg] = useState([]);
  const { id } = useParams();

  const user = useContext(UserContext);

  useEffect(() => {
    fetch(`/categories/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  const handleClick = (_id) => {
    fetch(`/items/`, {
      method: "DELETE",
    }).then((data) => {});
  };

  const senditem = (castName, _id) => {
    const item = { itemName, itemImg };
    fetch(`/items/cast/${_id}/${castName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((response) => {
      console.log(response.status);
    });
  };

  const classes = useStyles();
  return (
    <div>
      <div className="categories">
        {data.map((item, index) => (
          <div key={index}>
            <Card className={classes.root}>
              <div className="image-container">
                <div className="image-container">
                  <img src="../photo/shirt.jpg" alt="" />
                </div>
              </div>
              <CardActionArea>
                <CardContent>
                  <CardMedia height="250" />
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="big"
                  color="primary"
                  onClick={() => handleClick(item._id, data.catName)}
                >
                  Delete
                </Button>

                <h5>{item.itemName}</h5>
              </CardActions>
              <div className="categories">
                <div>
                  <select>
                    {user.currentuser.user.customizedCategories &&
                      user.currentuser.user.customizedCategories.map((cast) => {
                        return <option>{cast.castName}</option>;
                      })}
                  </select>
                </div>
              </div>
              <Button > send</Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item_management;
// onClick={() => senditem(cast.castName,item._id)}