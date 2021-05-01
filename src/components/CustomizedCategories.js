import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Cards.css";
import { useParams } from "react-router";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const CustomizedCategories = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
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
  const handleClick = (_id) => {
    fetch("/customizedCategories/" + _id, {
      method: "DELETE",
    }).then((data) => {
      history.push("/ConnectedHome");
    });
  };

  return (
    <div className="categories">
      {data.map((category) => (
        <div key={category.id}>
          <Link to={`/Itemcus_management/${category._id}`}>
            <div className="card-container ">
              <div className="image-container">
                <img src="./photo/jeans.jpg" alt="" />
              </div>
              <div className="card-content">
                <div className="card-title">
                  <button
                    size="big"
                    color="primary"
                    onClick={() => handleClick(category._id)}
                  >
                    Delete
                  </button>
                  <h5>{category.castName}</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CustomizedCategories;
