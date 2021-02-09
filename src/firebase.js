import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBrm3enOQ7UjfcffFx9l1E5RZQlLuv-pN4",
  authDomain: "tesla-clone-fac04.firebaseapp.com",
  projectId: "tesla-clone-fac04",
  storageBucket: "tesla-clone-fac04.appspot.com",
  messagingSenderId: "426987678061",
  appId: "1:426987678061:web:fd5a45e0afa62dc7341264",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
