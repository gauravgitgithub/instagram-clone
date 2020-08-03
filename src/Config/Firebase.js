import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQWqUoDK_NTdQt2XvYclLmMQMaO7BtAeE",
  authDomain: "instagram-clone-60b96.firebaseapp.com",
  databaseURL: "https://instagram-clone-60b96.firebaseio.com",
  projectId: "instagram-clone-60b96",
  storageBucket: "instagram-clone-60b96.appspot.com",
  messagingSenderId: "582078608549",
  appId: "1:582078608549:web:0bda26483009e68f2c094c",
  measurementId: "G-4CDX1QGK8L"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export default database;