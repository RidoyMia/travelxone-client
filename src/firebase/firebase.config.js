// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2_qeREET5aiI8mooKPj_QPKRNENCImgM",
  authDomain: "travelxone-6aa16.firebaseapp.com",
  projectId: "travelxone-6aa16",
  storageBucket: "travelxone-6aa16.appspot.com",
  messagingSenderId: "922520304470",
  appId: "1:922520304470:web:def6aaf3c5f1e9401e34f7",
  measurementId: "G-K7PS6Y4G1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;