// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

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

// Write to database, will overwrite anything at root
set(ref(database), {
    name: 'Bradley Watkins',
    age: 22,
    isSingle: true,
    location: {
        city: 'Swansea',
        country: 'Wales'
    }
})

// set(ref(database), 'This is my data')

// Update the age
set(ref(database, 'age'), 23)
// Update the location { city } value
set(ref(database, 'location/city'), 'Merthyr Tydfil')

set(ref(database, 'attributes'), {
    weight: '72kg',
    height: '5.8'
})

