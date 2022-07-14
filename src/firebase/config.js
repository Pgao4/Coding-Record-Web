import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDIi24sI0ymzqax2rodRV9TpoPI9nFqg64",
    authDomain: "kyrocode.firebaseapp.com",
    projectId: "kyrocode",
    storageBucket: "kyrocode.appspot.com",
    messagingSenderId: "179159056688",
    appId: "1:179159056688:web:81e6e16b92c59c952288f5"
}

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()

export { projectFirestore }