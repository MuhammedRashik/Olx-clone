import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgJ7hpvzk4ZJH_k8XcuC9tX_3Wlda3AnU",
    authDomain: "olx-clone-e4a01.firebaseapp.com",
    projectId: "olx-clone-e4a01",
    storageBucket: "olx-clone-e4a01.appspot.com",
    messagingSenderId: "570042714756",
    appId: "1:570042714756:web:ef6e5220567720a6a910d1",
    measurementId: "G-Z61FEHXH8B"
  };

  export default  firebase.initializeApp(firebaseConfig)