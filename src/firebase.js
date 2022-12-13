import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDURF4TZk-ZH2qlvcS6uZZYc7TYiVaXKs",
    authDomain: "linkedin-clone-cc4d3.firebaseapp.com",
    projectId: "linkedin-clone-cc4d3",
    storageBucket: "linkedin-clone-cc4d3.appspot.com",
    messagingSenderId: "943518517439",
    appId: "1:943518517439:web:01a4781e7a836e944ede0a",
    measurementId: "G-Z6FT1NWH17"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth(); 

export { db, auth };