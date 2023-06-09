import React, { useState,useContext , useEffect} from 'react'
import AuthContext from '../../store/AuthContext';
import "./Login.css"

function Login() {
  const authCtx = useContext(AuthContext)
  const [newUser, setNewUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData , setFormData] = useState({
    username:"",
    email:"",
    password:"",
    cpassword:"",
  }) 

// Functions Defined Here 
  function toggleAuth(){
    setNewUser((prev)=>!prev)
  }

  const handleChange = (e) => {
    setFormData({...formData , [e.target.name]:e.target.value})
  }

  const AddUsers = async (authname, userInfo) => {
    try {
      const response = await fetch(`/api/v1/users/${authname}`, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        authCtx.login(data.token);
      } else if(!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "An error occurred while processing your request.");
      }
    } catch (error) {
      setErrorMessage(error)
    }
  };

  
  const handleAdduser = async(e) => {

    e.preventDefault();
    
    try{
      if(newUser){
      const userInfo = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        passwordConfirm: formData.cpassword,
      }
      await AddUsers('signup' , userInfo);
    }
    else if(!newUser){
      const userInfo = {
        email: formData.email,
        password: formData.password
      }
      await AddUsers('login' , userInfo);
    }}catch(error){
      console.log(error);
    }
  }

  
useEffect(()=>{
  if(errorMessage){
    alert(errorMessage)
    setErrorMessage("")
  }
},[errorMessage])
     
  return (
    <div className="login" >
       <img className="login__image" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_993_medium.png?v=1667977862" width = {250}alt="" />
      <div>
       {!newUser && <h1 className='login__heading'>Login</h1>}
       {newUser && <h1 className='login__heading'>SignUp</h1>}
      </div>
       <form className='login__form' onSubmit={handleAdduser} >
     {  newUser&&  <input type="text" name="name"  placeholder='Enter You Name' onChange={handleChange} />}
        <input type="email" name="email"  placeholder='Enter You Email' onChange={handleChange} />
        <input type="password" name="password" placeholder='Enter You Password' onChange={handleChange}/>
       { newUser&& <input name="cpassword" type="password" placeholder='Confirm Your Password' onChange={handleChange} />}
       { !newUser && <button type='submit' >Login</button>}
       { newUser&& <button type='submit' >SignUp</button>}
       {!newUser && <h3>New to boAt? <span onClick={toggleAuth} > <b style={{ color: 'red' }} >Create an account </b>  </span> </h3>}
      { newUser&& <h3>Already a boathead ? <span onClick={toggleAuth} > <b style={{ color: 'red' }} >Login with your account</b> </span> </h3>}

       </form>
    </div>
  )
}

export default Login