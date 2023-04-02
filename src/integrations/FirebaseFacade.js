// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase APP base configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtGdeC3NiKHnA8N8zwB0Bx5u-XCyl5Ntw",
  authDomain: "jargon-cards.firebaseapp.com",
  projectId: "jargon-cards",
  storageBucket: "jargon-cards.appspot.com",
  messagingSenderId: "869716338916",
  appId: "1:869716338916:web:b5df7196840f580fda64f1"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

/**
 * Simple facade for implementing firebase-facing features
 */
export default class FirebaseFacade {
    /**
     * Returns Instance of firebase app
     * @returns {FirebaseApp} Instance of firebase app
     */
    getApp() {
        return app
    }

    /**
     * Returns firestore instance
     * @returns {Firestore} Firestore instance
     */
    getDb() {
        return getFirestore(this.getApp())
    }

    /**
     * Runs a sample query towards a sample collection for testing purposes
     * @returns Items within the foos collection
     */
    async sampleQuery() {
        const db = this.getDb()
        return getDocs(collection(db, "foos"))
    }
}

