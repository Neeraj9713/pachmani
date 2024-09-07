
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const [token , setToken] = useState(localStorage.getItem("token"));
    const [select, setSelect] = useState('home');
    const [isAuthenticate , setAuthenticate] = useState(false);
    const [user , setUser] = useState("");
    

    // check if login
    let isLoggedIn = !!token; 

    const storeTokenInLs = (serverToken)=>{ 
        return localStorage.setItem('token',serverToken)
    };
    // isAuthenticate
    const login= ()=>{
        setAuthenticate(true);
    }

    const logout= ()=>{
        setAuthenticate(false);
    }

    const userAuthentication = async()=>{
        try{
            const  response = fetch(`http://localhost:3000/api/auth/user` , {
                method:"GET",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            if(response.ok){
                const data = await response.json();
                console.log("user data",data);
                setUser(data);
            }

        }catch(e){
            console.log("Error fetching user data");
        }
    }

    useEffect(()=>{
        userAuthentication();
    },[])
 
    



    //handle logout functionality
    const Logoutuser=()=>{
        setToken("");
        return localStorage.removeItem("token");
    }

    return <AuthContext.Provider value={{user,isAuthenticate, logout, login, select, setSelect, isLoggedIn ,storeTokenInLs, Logoutuser}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth =()=>{
    const authContextValue = useContext(AuthContext);
    
    if(!authContextValue){
        throw new Error ("use outside of provider")
    }

    return authContextValue;
}