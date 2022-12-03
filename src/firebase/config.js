import firebase from "firebase";




const firebaseConfig = {
    apiKey: "AIzaSyClv5-MLL9yZoUFp8rMPs9ucWcRrr6nQMM",
    authDomain: "fir-cb57d.firebaseapp.com",
    projectId: "fir-cb57d",
    storageBucket: "fir-cb57d.appspot.com",
    messagingSenderId: "536763083273",
    appId: "1:536763083273:web:e99a1cfde061ebc4c326d8",
    measurementId: "G-FZS6LGCYCD"
  };

  const backend = firebase.initializeApp(firebaseConfig);
  const auth = backend.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


export { auth ,provider, backend}
