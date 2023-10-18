import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext } from "react";
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

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

    const user = 'Swadeb';

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