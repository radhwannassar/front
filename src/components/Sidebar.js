import React from "react";
import { useState } from "react";
import "./Sidebar.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import axios from "axios";

Modal.setAppElement("#root");

const Sidebar = () => {
  const [castName, setcastName] = useState("");
  const [castImg, setcastImg] = useState(null);
  const  user = useContext(UserContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const category = new FormData();
     category.append("castName",castName);
     category.append("castImg",castImg);
    
    
  axios.post("/customizedCategories",category).then(res=>console.log("success "))

    
    // fetch("/customizedCategories", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(category),
    // }).then((response) => {
      
    // });
  };
  return (
    <div>
      {user.etat ? (
        <>
          <div className="sidebar">
            <ui className="list-unstyled">
              <Link to="/Profile">
                <li>
                  <Button variant="contained" color="submit">
                    <img
                      src="https://p7.hiclipart.com/preview/782/114/405/5bbc3519d674c.jpg"
                      width="40px"
                      alt=""
                    ></img>{" "}
                    <h3>Edit Profile</h3>
                  </Button>
                </li>
              </Link>
              <Link to="/Item">
                <li>
                  <Button variant="contained" color="submit">
                    <div>
                      <img
                        src="https://www.svgrepo.com/show/127850/t-shirt-outline.svg"
                        width="40px"
                        alt=""
                      ></img>
                      <h4>Add Item</h4>{" "}
                    </div>
                  </Button>
                </li>
              </Link>
              <li>
                <Button variant="contained" color="submit">
                  <div>
                    <img
                      src="http://cdn.onlinewebfonts.com/svg/img_263507.png"
                      width="40px"
                      alt=""
                      onClick={() => setModalIsOpen(true)}
                    ></img>
                    <h4>Add Category</h4>{" "}
                  </div>
                </Button>
              </li>
              <div>
                <Modal
                  isOpen={modalIsOpen}
                  shouldCloseOnOverlayClick={false}
                  onRequestClose={() => setModalIsOpen(false)}
                  style={{
                    overlay: {
                      position: "fixed",
                      left: 500,
                      top: 150,
                      right: 0,
                      width: "500px",
                      height: "500px",
                      backgroundColor: "rgba(255, 255, 255, 0.75)",
                    },
                  }}
                >
                  <div className="style">
                    <div className="card-ainer">
                      <form onSubmit={handleSubmit}>
                        <div className="card-content">
                          <div className="card-title">
                            <h3>&nbsp;</h3>
                            <h3>&nbsp;</h3>

                            <h3 style={{ fontFamily: "Roboto" }}>
                              Category Name:
                            </h3>
                            <input
                              type="text"
                              required
                              value={castName}
                              onChange={(e) => setcastName(e.target.value)}
                            ></input>
                          </div>
                        </div>

                        <div className="image-container">
                          <h3 style={{ fontFamily: "Roboto" }}>
                            Category Picture:
                          </h3>
                          <button
                            type="button"
                            class="btn btn-primary btn-lg"
                            style={{ borderRadius: "5rem" }}
                          >
                            <input
                              required
                              type="file"
                              
                              onChange={(e) => setcastImg(e.target.files[0])}
                              name="picture"
                            ></input>
                          </button>
                        </div>

                        <div className="btn">
                          <button>
                            <a>Add Category</a>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                  </div>
                </Modal>
              </div>
            </ui>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Sidebar;
