import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config';

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [loading,setLoading]= useState(true);
    const [user, setUser] = useState(null);
    const [role, setRole] = useState("customer");


    const signupWithEmailAndPassword = (email,pass)=>{
        console.log(email,pass);
        
        return createUserWithEmailAndPassword(auth,email,pass)
    }
      const handleGoogleSignin =()=>{
        return signInWithPopup(auth,googleProvider)
      }
        
       
    const authData={
        signupWithEmailAndPassword,
        setUser,
        user,
        role,
        setRole,
        handleGoogleSignin,
        loading
    }
   useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, async (currentUser)=>{
    setUser(currentUser);
    if(currentUser?.email){
      try{
        const res = await fetch(`http://localhost:3000/users/${currentUser.email}`);
        const data = await res.json();
        setRole(data.role || "customer"); // backend থেকে role assign
      } catch(err){
        console.error(err);
        setRole("customer"); // fail হলে default
      }
    }
    setLoading(false);
  })
  return ()=> unsubscribe()
},[])

  return <AuthContext value={authData}>
    {children}
  </AuthContext>
}

export default AuthProvider;
