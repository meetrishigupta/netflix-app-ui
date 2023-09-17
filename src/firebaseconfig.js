// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq88V1oH2aqTUE-DgK_3w6Qfpw8W74C8Q",
  authDomain: "netflix-app-10508.firebaseapp.com",
  projectId: "netflix-app-10508",
  storageBucket: "netflix-app-10508.appspot.com",
  messagingSenderId: "506274549589",
  appId: "1:506274549589:web:7ced366e33901af32ee9dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
