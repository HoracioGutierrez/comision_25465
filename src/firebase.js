import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCcs_CiBrapMlKrmZQ6Ko9LXCRs1cT_-_U",
    authDomain: "comision-25465.firebaseapp.com",
    projectId: "comision-25465",
    storageBucket: "comision-25465.appspot.com",
    messagingSenderId: "171786651461",
    appId: "1:171786651461:web:ddf5861ef6b013d58ce02c"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);




