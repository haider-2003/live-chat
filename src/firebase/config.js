import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// Initialize Auth
const firebaseAuth = firebase.auth();

export { timestamp, db, firebaseAuth };
