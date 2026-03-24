import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBSMubPYjX7rdCfpECcZJvBO2slPGPpwLc",
  authDomain: "local-happens.firebaseapp.com",
  projectId: "local-happens",
  storageBucket: "local-happens.firebasestorage.app",
  messagingSenderId: "130830188932",
  appId: "1:130830188932:web:f9cf3208df1af195295dd1",
  measurementId: "G-THREVK4Z5L",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
