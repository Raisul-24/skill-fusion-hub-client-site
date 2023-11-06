import { createContext, useEffect, useState } from "react";
import app from "../config/firebase.config";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, TwitterAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         const userEmail = currentUser?.email || user.email;
         const loggedUser = { email: userEmail }

         setUser(currentUser);
         console.log("current User", currentUser);
         setLoading(false);
         // user exit to generate token
         if (currentUser) {
            axios.post('http://localhost:3001/jwt', loggedUser, { withCredentials: true })
               .then(res => {
                  console.log("token response", res.data);
               })
         }
         else {
            axios.post('http://localhost:3001/logout', loggedUser, { withCredentials: true })
               .then(res => {
                  console.log(res.data);
               })
         }
      });
      return () => {
         return unsubscribe();
      }
   }, [])

   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }
   const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   }
   const githubSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
   }
   const twitterSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, twitterProvider);
   }
   const logOut = () => {
      return signOut(auth);
   }

   const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      logOut,
      googleSignIn,
      githubSignIn,
      twitterSignIn,
   }

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider >
   );
};

export default AuthProvider;