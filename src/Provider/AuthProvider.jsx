import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config';

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider
const AuthProvider = ({children}) => {
    const [loading,setLoading]= useState(true);
    const [user, setUser] = useState(null);


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
        handleGoogleSignin,
        loading
    }
    useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
           setUser(currentUser)
           setLoading(false)
         })
         return ()=>{
            unsubscribe()
         }
    },[])

  return <AuthContext value={authData}>
    {children}
  </AuthContext>
}

export default AuthProvider;
