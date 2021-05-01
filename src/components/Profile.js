import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Register.css";
const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [skincolor, setSkinColor] = useState("");
  const [profileImg, setprofileImg] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
      gender,
      size,
      weight,
      skincolor,
      profileImg,
    };
    fetch("/users/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => {
      console.log(response.status);
      //history.go(-1);
    });
    history.push("/");
  };
  return (
    <div className="pr">
      <div className="container">
        <form
          onSubmit={handleSubmit}
          action="/action_page.php"
          class="needs-validation"
          novalidate
        >
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label>
                  <h3>First Name :</h3>
                </label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  class="form-control form-control-lg"
                  placeholder="Enter username"
                  name="uname"
                />
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label>
                  <h3>Last Name :</h3>
                </label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  class="form-control form-control-lg"
                  placeholder="Enter username"
                  name="uname"
                />
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label>
                  <h3>Email :</h3>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="form-control form-control-lg"
                  placeholder="Enter username"
                  name="uname"
                />
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label>
                  <h3>Pasword :</h3>
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="form-control form-control-lg"
                  id="pwd"
                  placeholder="Enter password"
                  name="pswd"
                />
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col"></div>
            <div class="col">
              <div class="form-group">
                <label>
                  <h3>Gender :</h3>
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  class="form-control form-control-lg"
                  placeholder="Enter username"
                  name="uname"
                  required
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
            </div>
            <div class="col"></div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label>
                  <h3>Wheight :</h3>
                </label>
                <input
                  type="text"
                  required
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  class="form-control form-control-lg"
                  placeholder="Enter username"
                  name="uname"
                />
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label>
                  <h3>Size :</h3>{" "}
                </label>
                <input
                  type="text"
                  required
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  class="form-control form-control-lg"
                  placeholder="Enter username"
                  name="uname"
                />
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label>
                  <h3>Skin-Color :</h3>
                </label>
                <input
                  type="text"
                  required
                  value={skincolor}
                  onChange={(e) => setSkinColor(e.target.value)}
                  class="form-control form-control-lg"
                  placeholder="Enter username"
                  name="uname"
                />
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col"></div>
            <div class="col">
              <div class="form-group">
                <label>
                  <h3>Please add a picture</h3>{" "}
                </label>
                <input
                  type="file"
                  value={profileImg}
                  onChange={(e) => setprofileImg(e.target.value)}
                  name="picture"
                  class="form-control-file form-control-lg"
                  placeholder="Enter username"
                  required
                />
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
            </div>
            <div class="col"></div>
          </div>

          <button type="submit" class="btn btn-primary">
            <h3>Submit</h3>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
