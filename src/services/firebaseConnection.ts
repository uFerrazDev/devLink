import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMo0T-611VNkHQK-ms1cGAzAg7fsZBfvs",
  authDomain: "reactlinks-1e2da.firebaseapp.com",
  projectId: "reactlinks-1e2da",
  storageBucket: "reactlinks-1e2da.firebasestorage.app",
  messagingSenderId: "1007857082763",
  appId: "1:1007857082763:web:1275ffa08e6916617c0f8e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};