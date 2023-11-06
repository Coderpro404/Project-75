import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCJFeHlXmXH7p4V9vdvyQlB67MBPngt6Bo",
  authDomain: "e-ride-app-e2875.firebaseapp.com",
  projectId: "e-ride-app-e2875",
  storageBucket: "e-ride-app-e2875.appspot.com",
  messagingSenderId: "342338622663",
  appId: "1:342338622663:web:45b2ee455a2ca977b39ae2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
