import React, { useState } from 'react'
import "./Login.css"
function Login() {
    const [login , setLogin] = useState(true);
    const [loginCredentials , setloginCredentials] = useState({username:"" , password:""})
    console.log(login);
    const handleloginCredentials = (e) => {
      setloginCredentials({...loginCredentials , [e.target.name] : e.target.value})
    }
    const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(loginCredentials.username);
      console.log(loginCredentials.password);

      // at the end just pul the loading screeen 
    }
  return (
    <div className="login" >
       <img className="login__image" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_993_medium.png?v=1667977862" width = {250}alt="" />
      <div>
       {login && <h1 className='login__heading'>Login</h1>}
       {!login && <h1 className='login__heading'>SignUp</h1>}
      </div>
       <form className='login__form' >
        <input type="email" name="username"  placeholder='Enter You Email' onChange={handleloginCredentials} />
        <input type="password" name="password" placeholder='Enter You Password' onChange={handleloginCredentials}/>
       { !login && <input type="password" placeholder='Confirm Your Password'/>}
       { login && <button onClick={handleSubmit}>Login</button>}
       { !login && <button onClick={handleSubmit} >SignUp</button>}
       {login && <h3>New to boAt? <span onClick={()=>setLogin((prev)=>!prev)} > <b style={{ color: 'red' }} >Create an account </b>  </span> </h3>}
      { !login && <h3>Already a boathead ? <span onClick={()=>setLogin((prev)=>!prev)} > <b style={{ color: 'red' }} >Login with your account</b> </span> </h3>}

       </form>
    </div>
  )
}

export default Login