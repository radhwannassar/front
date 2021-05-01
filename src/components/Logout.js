import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext } from "react";
 

const Logout = () => {
    const [data, setData] = useState([]);
    const history = useHistory();
    const  user = useContext(UserContext);
 
    
  
    useEffect(() => {
      fetch("/Logout/")
        .then((res) => {
          
        }) 
        .then((data) => {
          setData(data);
          user.setEtat(false)
            history.push("/");

        });
      
        
    }, []);



      return (
          <div>
              
          </div>
      )
  }
  
export default Logout;