import React, { useState } from 'react'
import Error from '../Messages/Error';
import axios from 'axios';
const initialState  = {name:"",email:"",password:"",confirmPassword:""}
const Auth = ({setIsAuthenticated,user,setUser,isLogin,setIsLogin})=>{

   
    const[formdata,setFormData] = useState(initialState)
    const[isError,setError] =  useState("");
    const switchAuthComponent = ()=>{
        setIsLogin(!isLogin);
    }
    const handleChange = (e)=>{
        e.preventDefault();
        setFormData({...formdata,[e.target.name]:e.target.value})
       
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!isLogin){
          if(formdata.password!==formdata.confirmPassword){
            setError("Password Doesn't Match Please Re-enter!!")
         }
         else{
           
           try{
            const res = await axios.post('/signup',formdata);
            
            setUser(res.data.result);
            setIsAuthenticated(true)
           }
           catch(e){
            
            setError(e.response.data.message);
           }
          }
        }
        else{
          try{
            const res = await axios.post('/signin',formdata);
            setUser(res.data.result);
            setIsAuthenticated(true);
          }
          catch(e){
            console.log(e);
            setError(e.response.data.message);
          }
        } 
        setTimeout(()=>{
          setError("")
        },3000)
        setFormData({...formdata,initialState});
    }
    return(
        <>
    {isError && <Error isError={isError}/>}
    <div className='container'>
     
      <div className='box'>
        <form onSubmit={handleSubmit} method="POST">
        <h1 className='textLabel'>{isLogin ? "LOGIN": "SIGNUP"}</h1>
          {!isLogin && (
            <div className='formControls'>
               <input type="text" name="name"  onChange={handleChange} placeholder='Enter Your Name' required></input>
            </div>
          )}
         
          <div className='formControls'>
            <input type="email" name="email"  onChange={handleChange} placeholder='Enter Your Email' required></input>
          </div>
          <div className='formControls'>
            <input type="password" name="password" onChange={handleChange} placeholder='Enter Your Password' required></input>
          </div>
          {!isLogin && (<div className='formControls'>
            <input type="password" name="confirmPassword" onChange={handleChange} placeholder='Confirm Password' required></input>
          </div>)}
          
          <div>
            <button className='authBtns'  onClick={switchAuthComponent}>{isLogin ? "Not Having Account? Please Sign UP" : "Already have an account? Login.."}</button>
          </div>
          <button type='submit' className='btn'>Submit</button>
        </form>
         
      </div>
    </div>
        </>
    )
}
export default Auth
