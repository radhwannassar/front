import { useEffect, useState, createContext } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext();

export const UserProvider = (props) => {
  

  const [currentuser, setcurrentuser] = useState([]);
  const    [etat, setEtat] = useState([]);
  
  useEffect(() => {
    if (Cookies.get("jwt")) {
      setEtat(true);
    } else {
      setEtat(false);
    }
  }, []);
  
  useEffect(() => {
    fetch("/users")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
       setcurrentuser(res);
        
      });
  }, []);


  return (
    <div>
      
      <UserContext.Provider value={{
        etat 
      ,setEtat
      ,currentuser 
      ,setcurrentuser }}   >
        {props.children}
      </UserContext.Provider>
    </div>
  );
};
