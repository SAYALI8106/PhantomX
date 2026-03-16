// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC38EqYYCvbUeO_59g00gUzxh0fXCU2H5c",
  authDomain: "phantomx-adb2c.firebaseapp.com",
  projectId: "phantomx-adb2c",
  storageBucket: "phantomx-adb2c.firebasestorage.app",
  messagingSenderId: "92687739632",
  appId: "1:92687739632:web:df3dc11c0014769da1f035",
  measurementId: "G-JZB8JFM40S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

