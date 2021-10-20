import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../component/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();


        return signInWithPopup(auth, googleProvider)


    }

    const handleEmailLogin = (name, email, password) => {
        console.log(name, email, password);
        createUserWithEmailAndPassword(auth, email, password).then((result) => {
            setUser(result.user);
            updateProfile(auth.currentUser, {
                displayName: name,
            }).then(() => { });
        });
    };

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        handleEmailLogin,
        userLogin,
        setIsLoading,
        isLoading
    }
}

export default useFirebase;