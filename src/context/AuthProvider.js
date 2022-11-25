import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false)

    const googleProvider = new GoogleAuthProvider()
    
  //1. Create User
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //   2. Update Name
  const updateUserProfile = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  
  // 4. Google Signin
  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // 5. Logout
  const logout = () => {
    setLoading(true)
    localStorage.removeItem('usedcar-token')
    return signOut(auth)
  }

  //6. Login with Password
  const signin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

// update user profile
const updateUser = (userInfo) =>{
    return updateProfile(auth.currentUser, userInfo)
}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => {
      
      unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    createUser,
    updateUser,
    updateUserProfile,
    signInWithGoogle,
    logout,
    signin,
    loading,
    setLoading,
  }

    return (
        <div>
           <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;