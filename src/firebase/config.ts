// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZt0vlObs4uTbyW87Qm2zBnuBBllmnf5A",
  authDomain: "dark-traveling-marshmallow.firebaseapp.com",
  databaseURL: "https://dark-traveling-marshmallow.firebaseio.com",
  projectId: "dark-traveling-marshmallow",
  storageBucket: "dark-traveling-marshmallow.appspot.com",
  messagingSenderId: "453318546367",
  appId: "1:453318546367:web:654c8c1447e7c3c6b7070a",
  measurementId: "G-B8CH174PDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);