import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyC-Lkq29PuZZwlPrwTNVY7DIBrYADW7-_Q",
  authDomain: "amzn-2-clone-40dd5.firebaseapp.com",
  projectId: "amzn-2-clone-40dd5",
  storageBucket: "amzn-2-clone-40dd5.appspot.com",
  messagingSenderId: "464061166548",
  appId: "1:464061166548:web:bb2a9e454f594aa0cfdc41",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
