import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ1bQ4Y--JHaSmk3R8d2nX2WA682SDi0U",
  authDomain: "jackson-twitter-clone-9236e.firebaseapp.com",
  databaseURL: "https://jackson-twitter-clone-9236e.firebaseio.com",
  projectId: "jackson-twitter-clone-9236e",
  storageBucket: "jackson-twitter-clone-9236e.appspot.com",
  messagingSenderId: "1031675169644",
  appId: "1:1031675169644:web:8f3a235e0ab8d342b74149",
  measurementId: "G-NZGGZME5QV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;