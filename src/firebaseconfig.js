// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_aRVJ9XWtDuekwybvOvWn5sXy1fbWbQM",
  authDomain: "netflix-clone-d9538.firebaseapp.com",
  projectId: "netflix-clone-d9538",
  storageBucket: "netflix-clone-d9538.appspot.com",
  messagingSenderId: "548285739348",
  appId: "1:548285739348:web:ffd147a95e68daeced18c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
