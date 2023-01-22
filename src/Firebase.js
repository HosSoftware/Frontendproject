import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getDatabase, ref} from "firebase/database"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAkcvcjGTn2Baka5Lrrx5_teqBCF1ozSao",
    authDomain: "vakantie2-7e08c.firebaseapp.com",
    databaseURL: "https://vakantie2-7e08c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vakantie2-7e08c",
    storageBucket: "vakantie2-7e08c.appspot.com",
    messagingSenderId: "116344111869",
    appId: "1:116344111869:web:f816c20076c4741c4b7494"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth()
export const db = getDatabase(app)
export const storage = getStorage(app)
export const dbRef = ref(db, "/")
export const destinationsRef = ref(db, "/destinations/")
