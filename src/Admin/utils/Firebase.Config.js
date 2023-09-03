import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtiEER4p-LL4BmEA4RsZsZW0CyXQa3TBY",
  authDomain: "express-api-5c639.firebaseapp.com",
  projectId: "express-api-5c639",
  storageBucket: "express-api-5c639.appspot.com",
  messagingSenderId: "265933160446",
  appId: "1:265933160446:web:950c4f0b7dbeddd8680aaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)