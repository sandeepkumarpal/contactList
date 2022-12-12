// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAsEN5mI4DXWEeODpyjOnBpK9tGJnPfF-Y",
  authDomain: "contctlist-a174a.firebaseapp.com",
  projectId: "contctlist-a174a",
  storageBucket: "contctlist-a174a.appspot.com",
  messagingSenderId: "794401314353",
  appId: "1:794401314353:web:dcd4b0a2ea7ead7ef1a710",
  measurementId: "G-D9QWX0NDX2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
