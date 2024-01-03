// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX8cFq-YmXbqJ1kK_fB7WrXLjnskH19Gs",
  authDomain: "mengaji-15428.firebaseapp.com",
  projectId: "mengaji-15428",
  storageBucket: "mengaji-15428.appspot.com",
  messagingSenderId: "585339805230",
  appId: "1:585339805230:web:f7ac416a7b7a6cf71409bf",
  measurementId: "G-Z46GKLY8BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

app.post('/login', async(req, res) => {
    const {email, password} = req.body;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    var user = userCredential.user;
    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    });
    res.redirect('/');
    })