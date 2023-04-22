// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, getDocs, addDoc, query, collection, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI9XsVaEkE-sVEY-_YTXoQ1QhUgeqYNB4",
  authDomain: "countries-lesson1702.firebaseapp.com",
  projectId: "countries-lesson1702",
  storageBucket: "countries-lesson1702.appspot.com",
  messagingSenderId: "127663725031",
  appId: "1:127663725031:web:5f95a48b97e6f7c3470542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function LogInEmailPassword(email, password)
{
    try{
        await signInWithEmailAndPassword(auth, email, password);
    } catch(err){
        console.log(err)
        alert(err.message);
    }
}

async function RegisterWithEmailPassword(name, email, password)
{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        // const g = query(collection(db, "users"), where("uid", "==", user.id));
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch(err) {
        console.log(err)
        alert(err.message);
    }
}

function LogOut()
{
    signOut(auth);
}

export { auth, db, LogInEmailPassword, RegisterWithEmailPassword, LogOut }