import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPdC-yZBt6QNdvnK8CTGur4VMjVpB2X4I",
  authDomain: "prepwise-a5a26.firebaseapp.com",
  projectId: "prepwise-a5a26",
  storageBucket: "prepwise-a5a26.firebasestorage.app",
  messagingSenderId: "966206220283",
  appId: "1:966206220283:web:9d231d392b2f5f8b648d5e",
  measurementId: "G-RMVPNBNDNY",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
