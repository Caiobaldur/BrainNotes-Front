import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({children}){
  const [data,setData] = useState({});
  
  async function signIn({email,password}){

    try {
      const response = await api.post("/sessions", {email,password});
      const {user,token} = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ user, token });

      localStorage.setItem("@brainotes: user", JSON.stringify(user));
      localStorage.setItem("@brainotes: token", token);

    } catch(error){
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possível entrar.")
      }
    }
  }

  function signOut() {
   localStorage.removeItem("@brainotes: token");
    localStorage.removeItem("@brainotes: user");

    setData({});
  }



  useEffect(() => {
    const token = localStorage.getItem("@brainotes: token");
    const user = localStorage.getItem("@brainotes: user");

    if(token && user){
      api.defaults.headers.authorization = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }

  }, [])

  return(
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
 const context = useContext(AuthContext);

 return context;
}

export { AuthProvider,useAuth };