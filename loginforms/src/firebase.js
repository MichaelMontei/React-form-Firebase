// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1oSnL9UEwIuQmrvVC_VzDjCnNgMZN8Qk",
    authDomain: "registrationform-react.firebaseapp.com",
    databaseURL: "https://registrationform-react-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "registrationform-react",
    storageBucket: "registrationform-react.appspot.com",
    messagingSenderId: "138801079155",
    appId: "1:138801079155:web:592094fb33ad257ff1db06",
    measurementId: "G-QEWCELV0TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);