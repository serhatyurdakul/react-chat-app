// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5EXVS1BWExTQPdayP3yT7S5yds5GHvC8",
  authDomain: "may-chat-app.firebaseapp.com",
  projectId: "may-chat-app",
  storageBucket: "may-chat-app.appspot.com",
  messagingSenderId: "912004516290",
  appId: "1:912004516290:web:cec779a9311aa9cbc36e5b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
