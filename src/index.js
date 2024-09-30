import { initializeApp } from "firebase/app";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from "react-router-dom";
const el = document.getElementById("root")
const root = ReactDOM.createRoot(el);
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-LN-6v3Aw8wnDFI5aPiOnvpu-wmr2ADE",
    authDomain: "ceramic-lovers-club.firebaseapp.com",
    projectId: "ceramic-lovers-club",
    storageBucket: "ceramic-lovers-club.appspot.com",
    messagingSenderId: "551586821903",
    appId: "1:551586821903:web:719774b742084e42e2307a"
};

// Initialize Firebase
initializeApp(firebaseConfig);


root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);

root.render(<App />);