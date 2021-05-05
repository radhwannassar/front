import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { useContext } from "react";

import "./Cards.css";
const Relai = () => {
  const [data, setData] = useState([]);
  
  const user = useContext(UserContext);
  useEffect(() => {
    fetch(`/categories/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="categories">
      {data &&
        data.map((category) => (
          <div >
            <Link to={`/Item_management/${category.catName}`} key={category.id}>
              <div className="card-container ">
                <div className="image-container">
                  <img src={category.catImg} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-title">
                    <h5>{category.catName}</h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Relai;

// {category.img}
