import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdqBQ_V-ahcTxsRF2nRSDW_ezszuTGSwo",
  authDomain: "awesome-auth-apps.firebaseapp.com",
  projectId: "awesome-auth-apps",
  storageBucket: "awesome-auth-apps.appspot.com",
  messagingSenderId: "888045617855",
  appId: "1:888045617855:web:fe7e6a54099d55fe327c0a",
};

const app = initializeApp(firebaseConfig);
export default app;
