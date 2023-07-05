// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN_1Xn-yN_gIxaUT9nXm-jug8uBr7_6Ts",
  authDomain: "finance-tracker-8e450.firebaseapp.com",
  projectId: "finance-tracker-8e450",
  storageBucket: "finance-tracker-8e450.appspot.com",
  messagingSenderId: "590504684598",
  appId: "1:590504684598:web:04fcc4e9acb5830253fc97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
