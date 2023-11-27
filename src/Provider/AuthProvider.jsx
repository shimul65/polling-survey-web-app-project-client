import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
// import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    // const axiosPublic = useAxiosPublic();

    // Sign up
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //update profile
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    };

    // observe with state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            setLoading(false)

            // const loggedUser = { email: currentUser?.email || user?.email };

            // //if user exists then issue a token
            // if (currentUser) {
            //     axiosPublic.post('/jwt', loggedUser, { withCredentials: true })
            //         .then(res => {
            //             console.log(res.data);
            //             setLoading(false);
            //         })
            // }
            // else {
            //     axiosPublic.post('/logout', loggedUser, { withCredentials: true })
            //         .then(res => {
            //             console.log(res.data);
            //             setLoading(true);
            //         })
            // }
        });
        return () => {
            unSubscribe();
        }
    }, [])



    // sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    const authInfo = {
        createUser,
        login,
        loading,
        logOut,
        user,
        handleUpdateProfile,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;