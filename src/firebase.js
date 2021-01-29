import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyArc5FJpFomMJtQ14JXsM1B2L8fLqUrZZE",
  authDomain: "clone-916f0.firebaseapp.com",
  projectId: "clone-916f0",
  storageBucket: "clone-916f0.appspot.com",
  messagingSenderId: "930912095968",
  appId: "1:930912095968:web:437c4e6f1d3f035a94ca85"
};





const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};