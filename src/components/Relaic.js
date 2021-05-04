import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Cards.css";
const Relaic = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/categories")
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
          <div key={category.id}>
            <Link to={`/Item_management/${category.catName}`}>
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

export default Relaic;
