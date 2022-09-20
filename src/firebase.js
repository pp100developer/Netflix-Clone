import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB03OHPI9TPASUf5nXjrf9TMC0mdLsvLBk",
  authDomain: "netflix-clone-14f8e.firebaseapp.com",
  projectId: "netflix-clone-14f8e",
  storageBucket: "netflix-clone-14f8e.appspot.com",
  messagingSenderId: "993362438529",
  appId: "1:993362438529:web:cafd8df94680c93dbc2080",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
