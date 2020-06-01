import firebase from 'firebase/app' 
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCkD959mIpie6k4Y2WOGco47Txx2SNR9gU",
    authDomain: "todo-app-1440b.firebaseapp.com",
    databaseURL: "https://todo-app-1440b.firebaseio.com",
    projectId: "todo-app-1440b",
    storageBucket: "todo-app-1440b.appspot.com",
    messagingSenderId: "51709012405",
    appId: "1:51709012405:web:19d43cd4a532d87dc511fc",
    measurementId: "G-HHSW07KS26"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;
