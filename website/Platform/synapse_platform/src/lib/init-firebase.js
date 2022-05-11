import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX9nH0UqFlGy8GTUpTbQT5MbcnUzbcY6k",
  authDomain: "synapse-4e711.firebaseapp.com",
  databaseURL: "https://synapse-4e711-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "synapse-4e711",
  storageBucket: "synapse-4e711.appspot.com",
  messagingSenderId: "684852528203",
  appId: "1:684852528203:web:7bd74cf1b2843429b779ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);