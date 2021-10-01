// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUiF-azutL9yL_SJtIy-3FZMci5NrUCqU",
    authDomain: "theroyals-vex.firebaseapp.com",
    projectId: "theroyals-vex",
    storageBucket: "theroyals-vex.appspot.com",
    messagingSenderId: "342959534793",
    appId: "1:342959534793:web:255b451e66823c8cfed318",
    measurementId: "G-NB46Y2GW0F"
};

let app;

if (getApps().length === 0) {
    // Initialize Firebase
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

export default app;