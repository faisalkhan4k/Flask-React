// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtMk3itmCj3qTe4xKUFQ5_aDDre4F0Fz0",
  authDomain: "jobhub-97f01.firebaseapp.com",
  projectId: "jobhub-97f01",
  storageBucket: "jobhub-97f01.appspot.com",
  messagingSenderId: "885634911740",
  appId: "1:885634911740:web:f27728c2d20db30756f679"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
