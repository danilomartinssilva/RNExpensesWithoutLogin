import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBMRngvILK7UUcCEJ0EOboQDDCjhB7HIP8",
    authDomain: "expensesreactnative.firebaseapp.com",
    databaseURL: "https://expensesreactnative.firebaseio.com",
    projectId: "expensesreactnative",
    storageBucket: "",
    messagingSenderId: "376407195437"
  };
  firebase.initializeApp(config);

export const database = firebase.database().ref('/expenses');

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();



