import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyC0nXFn6kUNR185Apa4NFVn1g6m3x7ctXM",
    authDomain: "crud-c3ce0.firebaseapp.com",
    databaseURL: "https://crud-c3ce0-default-rtdb.firebaseio.com",
    projectId: "crud-c3ce0",
    storageBucket: "crud-c3ce0.appspot.com",
    messagingSenderId: "311285361779",
    appId: "1:311285361779:web:fcebb273af3e664ce78e06",
  };

  const fireDb = firebase.initializeApp(firebaseConfig)
  export default fireDb.database().ref()