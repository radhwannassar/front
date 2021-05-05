import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

import "./Cards.css";


    const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },    
  }));
const ManageCategories = () => {
  const [data, setData] = useState([]);
  const [catName, setcatName] = useState();
  const [catImg, setcatImg] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch("/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleSubmit = (e) => {
   
      e.preventDefault();
    
     const category = new FormData();
     category.append("catName",catName);
     category.append("catImg",catImg);
  
  
   
  
  axios.post("/categories",category).then(res=>console.log("success "))
}
  
   // fetch("/categories", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //     body: category
  //   }).then((response) => {
  //    return(response.json()) 
  //     // console.log(response); 
  //     .then((data)=>{
  //       console.log(data)
  //     })
  //   });
  // };
  const handleClick = (_id) => { 
    fetch("/categories/" + _id, {
      method: "DELETE",
    }).then((data) => {});

  };
  const classes = useStyles();
  return (
    <div >
      <div className="categories">
        {data &&
          data.map((category) => (
            <div key={category.id}>
              <div className="card-container "> 
                <div className="image-container">
                  <img src={category.catImg} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-title">
                    <h5>{category.catName}</h5>
                  </div>
                  <div className="card-title">   
                  <div  className={classes.root}>
                <Button variant="contained" color="primary" 
                onClick={() => handleClick(category._id)}>
                    Delete
                </Button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="style">
            <div className="card-ainer">
              <div>
                <div className="card-content">
                  <div className="card-title">
                    <h5>Category Name:</h5>
                    <input
                      type="text"
                      required
                      value={catName}
                      onChange={(e) => setcatName(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="image-container">
                  <h5>Category Picture:</h5>
                  <input
                    required
                    type="file"
                    
                    onChange={(e) => setcatImg(e.target.files[0])}
                    name="picture"
                  ></input>
                </div>

                <div className="btn">
                  <button variant="primary">
                    Add Category
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageCategories;
