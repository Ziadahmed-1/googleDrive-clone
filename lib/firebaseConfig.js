// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDWsOhuhAtNzOdxgtLiF1vh3uxByshPa4",
  authDomain: "drive-caa94.firebaseapp.com",
  projectId: "drive-caa94",
  storageBucket: "drive-caa94.appspot.com",
  messagingSenderId: "162974555938",
  appId: "1:162974555938:web:440cab507b876bb4028f7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
