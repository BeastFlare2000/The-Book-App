import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBOJoz9aJJwzFA6IVVgN9aT38m3QaQ8Awg",
    authDomain: "project2-6e71d.firebaseapp.com",
    projectId: "project2-6e71d",
    storageBucket: "project2-6e71d.appspot.com",
    messagingSenderId: "245757534984",
    appId: "1:245757534984:web:f352ef02ad677e3df602bd"
  };
  // Initialize Firebase
  if(!firebase.apps.length)
{ firebase.initializeApp(firebaseConfig) } 
export default firebase.firestore()

  