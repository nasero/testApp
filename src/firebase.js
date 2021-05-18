import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBQ1cYtMlmidcIoRf3FxEzrO87KW17G3wM',
    authDomain: 'testapp-f1ef6.firebaseapp.com',
    projectId: 'testapp-f1ef6',
    storageBucket: 'testapp-f1ef6.appspot.com',
    messagingSenderId: '103885774192',
    appId: '1:103885774192:web:56838029614ac54b1b83b5'
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
