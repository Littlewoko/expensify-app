// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { get, getDatabase, onValue, onChildRemoved, onChildChanged, push, ref, remove, set, update } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8rs_flSOqPAYr4ESxBnKdwoMpYmH7qes",
  authDomain: "expensify-981c8.firebaseapp.com",
  databaseURL: "https://expensify-981c8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expensify-981c8",
  storageBucket: "expensify-981c8.appspot.com",
  messagingSenderId: "490222859833",
  appId: "1:490222859833:web:376e333375651b26193fe8",
  measurementId: "G-FSNMQK6MXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const database = getDatabase();

const expenses = [{
    description: 'coffee',
    note: 'coffee note',
    amount: 1234,
    createdAt: 0
}, {
    description: 'water',
    note: 'water note',
    amount: 5678,
    createdAt: 5
}, {
    description: 'tea',
    note: 'tea note',
    amount: 12938,
    createdAt: 9
}]

// for(let i = 0; i< expenses.length; i++) {
//     push(ref(database, 'expenses'), expenses[i])
// }

onValue(ref(database, 'expenses'), (snapshot) => {
    const expenses = []

    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    })

    console.log(expenses)
})

onChildRemoved(ref(database, 'expenses'), (snapshot) => {
    console.log(snapshot.key, ' Removed')
})

onChildChanged(ref(database, 'expenses'), (snapshot) => {
    console.log(snapshot.key, ' Changed')
})