import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9F1zZ9BMtcl8-xA2jl_EHxOj6tS0KJiI",
    authDomain: "proyecto-react-js.firebaseapp.com",
    projectId: "proyecto-react-js",
    storageBucket: "proyecto-react-js.appspot.com",
    messagingSenderId: "544617113480",
    appId: "1:544617113480:web:699884443d42a0b775bc3d"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app) 