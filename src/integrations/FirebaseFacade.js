// @ts-check

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import Lazy from "../utils/Lazy"

// Firebase APP base configuration
const firebaseConfig = {
    // cloud config
    cloud: {
        apiKey: "AIzaSyAtGdeC3NiKHnA8N8zwB0Bx5u-XCyl5Ntw",
        authDomain: "jargon-cards.firebaseapp.com",
        projectId: "jargon-cards",
        storageBucket: "jargon-cards.appspot.com",
        messagingSenderId: "869716338916",
        appId: "1:869716338916:web:b5df7196840f580fda64f1"
    },

    // local emulators config
    local: {
        projectId: "jargon-cards",
    }
}

const defaultFirebaseFacade = {
    cloud: new Lazy(() => {
        console.log('Configuring CLOUD firebase facade')

        const firebaseApp = initializeApp(firebaseConfig.cloud)
        const firestore = getFirestore(firebaseApp)

        return new FirebaseFacade(firebaseApp, firestore)
    }),
    local: new Lazy(() => {
        console.log('Configuring LOCAL firebase facade')

        const firebaseApp = initializeApp(firebaseConfig.local)

        const db = getFirestore(firebaseApp)
        connectFirestoreEmulator(db, 'localhost', 8089)

        return new FirebaseFacade(firebaseApp, db)
    })
}

/**
 * Simple facade for implementing firebase-facing features
 */
export default class FirebaseFacade {
    /**
     * Retrieves the default firebase facade
     * @returns {FirebaseFacade} Firebase facade instance
     */
    static getDefault() {
        const environment = location.hostname === 'localhost' ? 'local' : 'cloud'
        return defaultFirebaseFacade[environment].value
    }

    /**
     * Constructs a firebase facade
     * @param {FirebaseApp} firebaseApp Firebase app instance
     * @param {Firestore} firestore Firestore instance
     */
    constructor(firebaseApp, firestore) {
        this.firebaseApp = firebaseApp
        this.firestore = firestore
    }

    /**
     * Returns Instance of firebase app
     * @returns {FirebaseApp} Instance of firebase app
     */
    getApp() {
        return this.firebaseApp
    }

    /**
     * Returns firestore instance
     * @returns {Firestore} Firestore instance
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

