import { useState } from "react";

import "./Cards.css";

const Categories = () => {
  const [catName, setcatName] = useState("");
  const [catImg, setcatImg] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = { catName, catImg };
    fetch("/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    }).then((response) => {
      console.log(response.status);
    });
  };

  return (
    
     
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
                    value={catImg}
                    onChange={(e) => setcatImg(e.target.value)}
                    name="picture"
                  ></input>
                </div>

                <div className="btn">
                  <button variant="primary">
                    <a>Add Category</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    
  );
};

export default Categories;
