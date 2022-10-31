
//              assernment 10 
// .gitignore এর নিচে
// .env.local একটা ফাইল বানাতে হবে তার ভিতরে এভাবে ক্রিয়েট করতে হবে

// REACT_APP_apiKey= AIzaSyAOVnhnia2ZfOeYeo3MuM1lQmQ5krMgWNQ
// REACT_APP_authDomain= assernment-10.firebaseapp.com
// REACT_APP_projectId= assernment-10
// REACT_APP_storageBucket= assernment-10.appspot.com
// REACT_APP_messagingSenderId= 761976794110
// REACT_APP_appId= 1:761976794110:web:8deec64f52990d113baeaf





// --------------------------------------------------
// --------------------------------------------------
// firebasers.init.js পায়েল এর ভিতর

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app