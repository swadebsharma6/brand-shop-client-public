import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true)

    // create user
    const createUser = (email, password)=>{
           setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn user
    const signInUser =(email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut user
    const logOutUser = ()=>{
        setLoading(true);
        return signOut(auth)
    }

    // signIn with google
    const provider = new GoogleAuthProvider();

    const googleLogin = ()=>{
        setLoading(true);
       return  signInWithPopup(auth, provider)
    }

    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('observer', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return ()=>{
            unSubscribe()
        }

    }, [])

  

    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        logOutUser,
        googleLogin,

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node,
    
}