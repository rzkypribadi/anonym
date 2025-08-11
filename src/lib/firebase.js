import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDqTB7AFOXvvdy6rYXli3RCP1hop8ulBqc",
  authDomain: "anonymous-9f098.firebaseapp.com",
  databaseURL: "https://anonymous-9f098-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "anonymous-9f098",
  storageBucket: "anonymous-9f098.firebasestorage.app",
  messagingSenderId: "517332437481",
  appId: "1:517332437481:web:c0ce11a8c3ab216c92e378",
  measurementId: "G-2JB8SN3TV2"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth };
