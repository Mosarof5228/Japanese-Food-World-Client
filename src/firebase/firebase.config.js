// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfA6oMLszhjhfRqcWM6XlfdKL1laCHZmI",
    authDomain: "japanees--food-worlds.firebaseapp.com",
    projectId: "japanees--food-worlds",
    storageBucket: "japanees--food-worlds.appspot.com",
    messagingSenderId: "31283247741",
    appId: "1:31283247741:web:ad85efc8d215b67ee3cf14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;