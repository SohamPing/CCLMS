// https://youtu.be/WpIDez53SK4?si=FpGUDrtASVNF4be6 This video referred 

import React, { useContext, useState,  useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, initialUser)
        return unsubscribe
    },[])

    async function initialUser(user){
        if(user){
            setCurrentUser({ ...user });
            setUserLoggedIn(true);
        }
        else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
    }
    
    const value = {
        currentUser,
        userLoggedIn,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}