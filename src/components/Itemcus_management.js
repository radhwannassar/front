import { Link } from "react-router-dom";
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Itemcus_management = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`/customizedCategories/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  const handleClick = (_id, castName) => {
    fetch(`/items/${_id}/${castName}`, {
      method: "DELETE",
    }).then((data) => {});
  };
  const classes = useStyles();
  return (
    <div>
      <div className="categories">
        {data.items &&
          data.items.map((item) => (
            <div key={item.id}>
              <Link>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardContent>
                      <CardMedia height="250" />

                      <img src="./photo/jacket.jpg" alt="" />
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="big"
                      color="primary"
                      onClick={() => handleClick(item._id, data.castName)}
                    >
                      Delete
                    </Button>
                    <h5>{item.itemName}</h5>
                  </CardActions>
                </Card>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Itemcus_management;
