// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFMwuAOk-OqBnU-zkpxfQau2SsQh35__A",
  authDomain: "bolder-c6bcf.firebaseapp.com",
  projectId: "bolder-c6bcf",
  storageBucket: "bolder-c6bcf.appspot.com",
  messagingSenderId: "456065971656",
  appId: "1:456065971656:web:1c9e655088594101673cfd"

};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore( FirebaseApp );