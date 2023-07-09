// @ts-check

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import Lazy from "../utils/Lazy"

const CLOUD_FIREBASE = new Lazy(() => {
    console.log('Configuring CLOUD firebase facade')

    const firebaseCloudConfig =  {
        apiKey: "AIzaSyAtGdeC3NiKHnA8N8zwB0Bx5u-XCyl5Ntw",
        authDomain: "jargon-cards.firebaseapp.com",
        projectId: "jargon-cards",
        storageBucket: "jargon-cards.appspot.com",
        messagingSenderId: "869716338916",
        appId: "1:869716338916:web:b5df7196840f580fda64f1"
    }
    const firebaseApp = initializeApp(firebaseCloudConfig)
    const firestore = getFirestore(firebaseApp)

    return new FirebaseFacade(firebaseApp, firestore)
})

const LOCAL_FIREBASE = new Lazy(() => {
    console.log('Configuring LOCAL firebase facade')

    const firebaseLocalConfig = {
        projectId: "jargon-cards"
    }
    const firebaseApp = initializeApp(firebaseLocalConfig)

    const db = getFirestore(firebaseApp)
    connectFirestoreEmulator(db, 'localhost', 8089)

    return new FirebaseFacade(firebaseApp, db)
})

/**
 * Simple facade for implementing firebase-facing features
 */
export default class FirebaseFacade {
    /**
     * Retrieves the default firebase facade
     * @returns {FirebaseFacade} Firebase facade instance
     */
    static getDefault() {
        switch (location.hostname) {
            case 'localhost':
            case '127.0.0.1':
                return LOCAL_FIREBASE.value
            default:
                return CLOUD_FIREBASE.value
        }
    }

    /**
     * Constructs a firebase facade
     * @param {import("@firebase/app").FirebaseApp} firebaseApp Firebase app instance
     * @param {import("@firebase/firestore").Firestore} firestore Firestore instance
     */
    constructor(firebaseApp, firestore) {
        this.firebaseApp = firebaseApp
        this.firestore = firestore
    }

    /**
     * Returns Instance of firebase app
     * @returns {import("@firebase/app").FirebaseApp} Firebase app instance
     */
    getApp() {
        return this.firebaseApp
    }

    /**
     * Returns firestore instance
     * @returns {import("@firebase/firestore").Firestore} Firestore instance
     */
    getDb() {
        return this.firestore
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

