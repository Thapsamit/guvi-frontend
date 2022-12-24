
import './App.css';
import Auth from './Components/Auth/Auth';
import Profile from './Components/Profile/Profile';
import { useState } from 'react';
function App() {
  const[isAuthenticated,setIsAuthenticated] = useState(false);
  const[user,setUser] = useState(null);
  const[isLogin,setIsLogin] = useState(false);
  return (
   <>
     {!isAuthenticated ? (<Auth setIsAuthenticated = {setIsAuthenticated} user={user} setUser={setUser} isLogin={isLogin} setIsLogin={setIsLogin}/>) : (<Profile user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} setIsLogin={setIsLogin}/>)}
   </>
  );
}

export default App;
