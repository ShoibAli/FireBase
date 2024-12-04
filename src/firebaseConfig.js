import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

console.log("this kry :", process.env.REACT_APP_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: "AIzaSyAtKyuOKtHKCuPWrHA2ZiZL88T3yaeYLTI",
  authDomain: "login-dac45.firebaseapp.com",
  projectId: "login-dac45",
  storageBucket: "login-dac45.firebasestorage.app",
  messagingSenderId: "1079424196671",
  appId: "1:1079424196671:web:0482e8ed7650f23699d88a",
};

export default firebaseConfig;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
