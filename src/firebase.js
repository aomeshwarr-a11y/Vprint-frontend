import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3Y_9U0jaxie4uY3n8ulfxyTSHMdLWW0I",
  authDomain: "smart-printer-5561a.firebaseapp.com",
  projectId: "smart-printer-5561a",
  storageBucket: "smart-printer-5561a.firebasestorage.app",
  messagingSenderId: "934038528716",
  appId: "1:934038528716:web:06908829aa22b3a2d65869",
  measurementId: "G-3RSMQ175LC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Cloud Firestore
export const db = getFirestore(app);

