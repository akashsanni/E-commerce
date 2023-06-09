import React, {useState}from 'react'

const AuthContext = React.createContext({
  token:"",
  isLoggedIn:true,
  login:(token)=>{
  },
  logout:()=>{}

})
 export const AuthContextProvider = (props) =>{
  const localtoken = localStorage.getItem('token')
  const [token,setToken] = useState(localtoken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) =>{
    setToken(token);
    isLoggedIn=truelocalStorage.setItem('token',token)
  }
  const logoutHandler = () =>{
    setToken(null);
    localStorage.removeItem('token')
  }

  const contextValue = {
    token:token,
    isLoggedIn:userIsLoggedIn,
    login:loginHandler,
    logout:logoutHandler
  }
  return <AuthContext.Provider value={contextValue}>
    {props.children}
  </AuthContext.Provider>
 }

 export default AuthContext;