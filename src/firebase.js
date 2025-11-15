// src/firebase.js

// Import Firebase core SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Import Firestore (THIS WAS MISSING)
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNhitODuh1LXE9S87Cm_EEqKbjQaH8mLA",
  authDomain: "wedding-invite-farahmeon.firebaseapp.com",
  projectId: "wedding-invite-farahmeon",

  // FIXED: storageBucket must end with .appspot.com
  storageBucket: "wedding-invite-farahmeon.appspot.com",

  messagingSenderId: "253501046358",
  appId: "1:253501046358:web:888138595720f883a245f7",
  measurementId: "G-H2KGTYS6HY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional analytics (works only on HTTPS + not localhost)
const analytics = getAnalytics(app);

// Export Firestore database
export const db = getFirestore(app);
