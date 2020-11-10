import firebase from  'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyBZIJd78WJUlnJ_mTmi7caQ60M0r3_PDOs",
    authDomain: "onlinestore-22e59.firebaseapp.com",
    databaseURL: "https://onlinestore-22e59.firebaseio.com",
    projectId: "onlinestore-22e59",
    storageBucket: "onlinestore-22e59.appspot.com",
    messagingSenderId: "921832372545",
    appId: "1:921832372545:web:f6cbdc2c9b1522131b49c0",
    measurementId: "G-LXNTHVB3JX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.database();
  // Get a reference to the database service
var database = firebase.database();
  export default firebase;