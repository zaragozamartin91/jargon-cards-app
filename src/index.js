// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtGdeC3NiKHnA8N8zwB0Bx5u-XCyl5Ntw",
  authDomain: "jargon-cards.firebaseapp.com",
  projectId: "jargon-cards",
  storageBucket: "jargon-cards.appspot.com",
  messagingSenderId: "869716338916",
  appId: "1:869716338916:web:b5df7196840f580fda64f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "foos"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
});
