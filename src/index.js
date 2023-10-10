import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase'
// import 'firebase/firestore'
const root = ReactDOM.createRoot(document.getElementById('root'));
const firebaseConfig = {
    // FIREBASE_CONFIGURATION
    apiKey: "AIzaSyDetZ0bR2ovTneL3tnwoIBNZcKWLD_U5_M",
  authDomain: "cart-web-app-9d7a4.firebaseapp.com",
  projectId: "cart-web-app-9d7a4",
  storageBucket: "cart-web-app-9d7a4.appspot.com",
  messagingSenderId: "69783239472",
  appId: "1:69783239472:web:eff9886deced6981f066f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
