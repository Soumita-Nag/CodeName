import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAElnlYHnyxKMR0dvL-WxsbJLYMHeybPFQ",
  authDomain: "codename-b3353.firebaseapp.com",
  projectId: "codename-b3353",
  storageBucket: "codename-b3353.firebasestorage.app",
  messagingSenderId: "367808541330",
  appId: "1:367808541330:web:07dc161018f71035fa2c4b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore reference
const db = getFirestore(app);

export { db };
