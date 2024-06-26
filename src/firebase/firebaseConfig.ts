import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE0T6At-Z9_FhcMz0Ir6Hxum-4UlLSk0k",
  authDomain: "web-weather-app-5af63.firebaseapp.com",
  projectId: "web-weather-app-5af63",
  storageBucket: "web-weather-app-5af63.appspot.com",
  messagingSenderId: "653834646428",
  appId: "1:653834646428:web:8f76dcff21dfd58fd3ce59",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithPopUp = (): Promise<UserCredential> => {
  return signInWithPopup(auth, googleProvider);
};

const signUpWithEmailAndPassword = (
  email: string,
  password: string
): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export {
  auth,
  googleProvider,
  db,
  signInWithPopUp,
  signUpWithEmailAndPassword,
};
