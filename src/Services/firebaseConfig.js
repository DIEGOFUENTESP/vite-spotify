import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Asegúrate de incluir signInWithEmailAndPassword
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAjHacFq0pfqxAhT-AbE9wMrPsqHS7H9BM",
  authDomain: "reactmusicspotify.firebaseapp.com",
  projectId: "reactmusicspotify",
  storageBucket: "reactmusicspotify.appspot.com",
  messagingSenderId: "32390382734",
  appId: "1:32390382734:web:45a91764144325d1ce75df",
  measurementId: "G-ZK463ESY5B"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword };
