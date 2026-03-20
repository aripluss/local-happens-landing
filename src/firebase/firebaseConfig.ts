import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0hQIEVxsaJmhq0aT6K3yHBzagyyjHK9o",
  authDomain: "local-happens.firebaseapp.com",
  projectId: "local-happens",
  storageBucket: "local-happens.firebasestorage.app",
  messagingSenderId: "130830188932",
  appId: "1:130830188932:web:xxxxxxxxxxxx",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
