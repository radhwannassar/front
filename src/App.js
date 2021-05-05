import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Item_management  from "./components/Item_management";
import Itemcus_management  from "./components/Itemcus_management";
import Logout from "./components/Logout";
import PageInrouvable from "./components/PageIntrouvable";
import ConnectedHome from "./components/ConnectedHome";
import ManageCategories from "./components/ManageCategories";
import FittingRoom from "./components/FittingRoom";
import { UserProvider } from "./UserContext";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import ProfilePage from "./components/ProfilePage";
import Item from "./components/Item";
import ManageUsers from "./components/ManageUsers";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <div className="nn">
             <Navbar />
          </div>
         
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Item_management/:id">
              <Item_management />
            </Route>
            <Route exact path="/Itemcus_management/:id">
              <Itemcus_management />
            </Route>
            <Route exact path="/ProfilePage">
              <ProfilePage />
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
            <Route exact path="/ManageUsers">
              <ManageUsers />
            </Route>
            <Route exact path="/Item">
              <Item />
            </Route>
            <Route exact path="/Register">
              <Register />
            </Route>
             <Route exact path="/Logout">
              <Logout />
            </Route> 
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/ManageCategories">
              <ManageCategories />
            </Route>
            <Route exact path="/ConnectedHome">
              <ConnectedHome />
            </Route>
            <Route exact path="/FittingRoom">
              <FittingRoom />
            </Route>
            <Route path="*">
              <PageInrouvable />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer/>
    </UserProvider>
  );
}
export default App;
