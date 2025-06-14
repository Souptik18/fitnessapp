import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8ZsGlVXsPerTh8N-274QbXBFf1KzdfTM",
  authDomain: "activealignx.firebaseapp.com",
  projectId: "activealignx",
  storageBucket: "activealignx.firebasestorage.app",
  messagingSenderId: "637192762874",
  appId: "1:637192762874:web:ed61f291b5ae5c1ef26043",
  measurementId: "G-EV464XE7PT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
