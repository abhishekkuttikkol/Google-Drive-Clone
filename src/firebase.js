import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  // projectId: "",      Your Firebase API here
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export {auth, provider, storage, db}
