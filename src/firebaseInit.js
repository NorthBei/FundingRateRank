import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDjAF_rKRABk1-aRfMXgwuILKSk1qqf6QY",
    authDomain: "funding-rate-rank.firebaseapp.com",
    projectId: "funding-rate-rank",
    storageBucket: "funding-rate-rank.appspot.com",
    messagingSenderId: "1090551449146",
    appId: "1:1090551449146:web:2df5c05b5298b0dfb35703",
    measurementId: "G-RVEXSSVZT4"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  export default db;
