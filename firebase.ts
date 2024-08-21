// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "aspdc-website.firebaseapp.com",
    projectId: "aspdc-website",
    storageBucket: "aspdc-website.appspot.com",
    messagingSenderId: "1018608301349",
    appId: "1:1018608301349:web:bcb7083f5d4404915316cc",
    measurementId: "G-7GMPWC5HRM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
