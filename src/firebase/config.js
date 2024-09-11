import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBV88Kis77OrAbeAwWEd15Q4S8ExI17CEQ",
    authDomain: "project-management-site-9b4c3.firebaseapp.com",
    projectId: "project-management-site-9b4c3",
    storageBucket: "project-management-site-9b4c3.appspot.com",
    messagingSenderId: "508722431555",
    appId: "1:508722431555:web:fe6b37dcdea4bfbd7c76f6"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }