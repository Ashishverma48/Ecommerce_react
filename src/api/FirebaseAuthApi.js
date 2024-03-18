import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut
} from "firebase/auth";

import { auth } from "../firebaseConfig";

export const RegisterApi = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(response.user, { displayName: name });
    return null;
  } catch (error) {
    return error;
  }
};

export const googleSignInApi = () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    const res = signInWithPopup(auth, googleProvider);
    return res;
  } catch (error) {
    return error;
  }
};

export const loginApi = async (email, password) => {
  try {
    const res = signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    return error;
  }
};


export const  handleSignOut = ()=>{
    return  signOut(auth)
}