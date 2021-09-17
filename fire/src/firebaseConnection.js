import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyAzZ-MsqIH_GHYKNdU0D1kfoWV-y1gMtQU",
    authDomain: "curso-45413.firebaseapp.com",
    projectId: "curso-45413",
    storageBucket: "curso-45413.appspot.com",
    messagingSenderId: "411579580885",
    appId: "1:411579580885:web:efc490645272b680db7d5c",
    measurementId: "G-Q01SKP47SW"
  };
  
if(!firebase.apps.length){
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase