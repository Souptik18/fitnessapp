// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8ZsGlVXsPerTh8N-274QbXBFf1KzdfTM",
  authDomain: "activealignx.firebaseapp.com",
  projectId: "activealignx",
  storageBucket: "activealignx.firebasestorage.app",
  messagingSenderId: "637192762874",
  appId: "1:637192762874:web:ed61f291b5ae5c1ef26043",
  measurementId: "G-EV464XE7PT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);