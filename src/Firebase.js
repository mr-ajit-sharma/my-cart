// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDetZ0bR2ovTneL3tnwoIBNZcKWLD_U5_M",
  authDomain: "cart-web-app-9d7a4.firebaseapp.com",
  projectId: "cart-web-app-9d7a4",
  storageBucket: "cart-web-app-9d7a4.appspot.com",
  messagingSenderId: "69783239472",
  appId: "1:69783239472:web:eff9886deced6981f066f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)

export default db