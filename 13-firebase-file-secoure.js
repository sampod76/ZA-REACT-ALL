




// 1) প্রথমত src foldre=    .env.local  নামে একটা ফাইল ক্রিয়েট করতে হবে তার ভিতরে এভাবে লিখতে হবে

REACT_APP_API_KEY="AIzaSyARvfLlepW075jznmCGCVrhjfh30OaURJ4"
REACT_APP_AUTH_DOMAIN="recap-full-react.firebaseapp.com"
REACT_APP_PROJECT_ID="recap-full-react"   
REACT_APP_STORAGE_BUCKET="recap-full-react.appspot.com"
REACT_APP_MESSAGING_SENDER_ID="828221355843",
REACT_APP_APP_ID="1:828221355843:web:fe0a0fc891a5e73a3021f6"




// 2) তারপর আগের firebaser file এডিট করতে হবে


import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app


// .gitignore fila  a   .env.local input kora det hoba
 
.env.local