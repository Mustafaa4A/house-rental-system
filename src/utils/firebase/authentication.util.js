import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAcXF1g1CXsKZjjlQoVGl5TvW09YW2dco",
  authDomain: "house-rental-db-f82c5.firebaseapp.com",
  projectId: "house-rental-db-f82c5",
  storageBucket: "house-rental-db-f82c5.appspot.com",
  messagingSenderId: "1002157876201",
  appId: "1:1002157876201:web:f2e5067b62ded6ab6ea178",
};

const app = initializeApp(firebaseConfig);

//google provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//facebook provider
const facebookProvider = new FacebookAuthProvider();
facebookProvider.getCustomParameters({
  prompt: "select_account",
});

//
const auth = getAuth();

//signin with google popup
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

//signin with facebook popup
export const signInWithFacebook = () => signInWithPopup(auth, facebookProvider);

//
const db = getFirestore();

//creating user from auth provider
export const createUserFromAuth = async (userAuth, otherData) => {
  const userDoc = await doc(db, "users", userAuth.uid);

  const userElement = await getDoc(userDoc);

  if (!userElement.exists()) {
    //
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDoc, {
        displayName,
        email,
        createdAt,
        ...otherData,
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return userDoc;
};

//creating user from email and password
export const createUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};

//signin with email and password
export const signInUsingEmailAndPasswor = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

//sign outord
export const userSignOut = async () => await signOut(auth);

//authlistener
export const authlistener = (callback) => onAuthStateChanged(auth, callback);
