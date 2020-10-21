import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBnICzNvSF15WjKwXXIX5MLwjfWRTDXA9w",
    authDomain: "facebook-clone-140dd.firebaseapp.com",
    databaseURL: "https://facebook-clone-140dd.firebaseio.com",
    projectId: "facebook-clone-140dd",
    storageBucket: "facebook-clone-140dd.appspot.com",
    messagingSenderId: "621002134160",
    appId: "1:621002134160:web:1feaf1037826a62302be15"
  };

  // connect FE with BE
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
// for google login service

export { auth, provider };
export default db;
