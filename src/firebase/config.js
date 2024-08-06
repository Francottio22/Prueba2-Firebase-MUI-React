// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL-nNIB-4973DrR2AllALuMfuYQ-Re9Wc",
  authDomain: "todolistapp-87dba.firebaseapp.com",
  projectId: "todolistapp-87dba",
  storageBucket: "todolistapp-87dba.appspot.com",
  messagingSenderId: "146424712307",
  appId: "1:146424712307:web:e4b7853f195b9368d8ee06"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );