// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore/lite"



const firebaseConfig = {
  apiKey: "AIzaSyC5zJeZTlbUJ4vO6Wui9lOG14rC1QLJGGg",
  authDomain: "react-ecomerce-d056d.firebaseapp.com",
  projectId: "react-ecomerce-d056d",
  storageBucket: "react-ecomerce-d056d.appspot.com",
  messagingSenderId: "733067345260",
  appId: "1:733067345260:web:04b267f0e14ea6efac8749",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)