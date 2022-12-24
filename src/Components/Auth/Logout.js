import React from "react";
const Logout = ({setUser,setIsAuthenticated,setIsLogin})=>{
  const handleLogout = ()=>{
    setUser(null);
    setIsAuthenticated(false);
    setIsLogin(true);
  }
    return(
        <>
          <button className="btn btn-logout" onClick={handleLogout}>Logout</button>
        </>
    )
}
export default Logout