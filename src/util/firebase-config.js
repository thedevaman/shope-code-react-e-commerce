import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC0sTGetHU89SEvyG-4KctKclJQbT70uuI",
  authDomain: "shopecode-ba1d7.firebaseapp.com",
  projectId: "shopecode-ba1d7",
  storageBucket: "shopecode-ba1d7.appspot.com",
  messagingSenderId: "965892685349",
  appId: "1:965892685349:web:4f4dba3676d291271d89cc",
  measurementId: "G-WBNSK5EZ31"
};


const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig