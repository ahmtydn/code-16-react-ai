// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyB3fV6WI8YKG_WIbFXgl-PZn64AVs6co",
    authDomain: "code-16-b01b9.firebaseapp.com",
    projectId: "code-16-b01b9",
    storageBucket: "code-16-b01b9.appspot.com",
    messagingSenderId: "781069479470",
    appId: "1:781069479470:web:7fa563341c8da57600f9bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();