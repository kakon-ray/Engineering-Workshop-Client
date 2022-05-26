// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDPaDdVHUXSHokq7fDko2pXAvuiwla22wI",
  authDomain: "engineering-workshop-a0bd0.firebaseapp.com",
  projectId: "engineering-workshop-a0bd0",
  storageBucket: "engineering-workshop-a0bd0.appspot.com",
  messagingSenderId: "669163215584",
  appId: "1:669163215584:web:134e03b0fe5bcf47c90e85"

  // apiKey:process.env.REACT_APP_API_KEY,
  // authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  // projectId:process.env.REACT_APP_PROJECT_ID,
  // storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId:process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
