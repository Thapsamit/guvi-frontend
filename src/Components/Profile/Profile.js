import React,{useState} from "react";
import Logout from "../Auth/Logout";
import axios from "axios";
import Success from "../Messages/Success";
const Profile = ({user,setUser,setIsAuthenticated,setIsLogin})=>{
    const[isSuccess,setIsSuccess] = useState("")
   
    let formattedDate = "";
    if(user.dob){
      formattedDate = new Date(user.dob).toISOString().split('T')[0];
    
    }
   
    const handleChange = (e)=>{
         setUser({...user,[e.target.name]:e.target.value});
    }
    const handleSubmit = async (e)=>{

        e.preventDefault();
  
        const id = user._id;
        try{
          const res = await axios.patch(`/profile/${id}`,user)
          setIsSuccess("Profile Updated Successfully")
          setTimeout(()=>{
            setIsSuccess("");
          },3000)
          console.log(res)
        }
        catch(e){
          console.log(e)
        }
      
        
    }
   return(
    
    <>
      {isSuccess && <Success successMsg={isSuccess}/>}
      <div className="strip">
      {user && <p className="greetings">Hi, {user.name}</p>}
      <Logout setUser = {setUser} setIsAuthenticated={setIsAuthenticated} setIsLogin={setIsLogin}/>
      </div>
      
      <div className="container">
        <div className="box">
            <h1 className="textLabel">Profile Page</h1>
          <form onSubmit={handleSubmit} method="POST">
          <div className='formControls'>
              <input type="text" name="name" placeholder={user.name} required disabled></input>
          </div>
            <div className='formControls'>
              <input type="email" name="email" placeholder={user.email} required disabled></input>
          </div>
          <div className='formControls'>
              <input type="number" name="age" value={user.age} onChange={handleChange} placeholder={!user.age && "Enter Your Age"} required></input>
          </div>
          <div className='formControls'>
              <input type="text" name="gender" value ={user.gender} onChange={handleChange} placeholder={!user.gender && "Enter Your Gender"} required></input>
          </div>
          <div className='formControls'>
              <input type="date" name="dob" value={formattedDate} onChange={handleChange} placeholder={!user.dob && "Enter Your DOB"} required></input>
          </div>
          <div className='formControls'>
              <input type="tel" name="mobile" value={user.mobile} onChange={handleChange} placeholder={!user.mobile && "Enter Your Mobile"} required></input>
          </div>
          <button className="btn" type="submit">Update Profile</button>
          </form>
          
        </div>
      </div>
    </>
   )

}
export default Profile