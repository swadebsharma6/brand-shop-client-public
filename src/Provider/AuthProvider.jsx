import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    // create user
    const createUser = (email, password)=>{
            return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn user
    const signInUser =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut user
    const logOutUser = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('observer', currentUser);
            setUser(currentUser)
        });

        return ()=>{
            unSubscribe()
        }

    }, [])

  

    const authInfo ={
        user,
        createUser,
        signInUser,
        logOutUser

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