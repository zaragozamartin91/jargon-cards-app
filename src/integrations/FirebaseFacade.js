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

const firebaseInstance = {
    cloud: new Lazy(() => initializeApp(firebaseConfig.cloud)),
    local: new Lazy(() => initializeApp(firebaseConfig.local)),
}

const firestoreInstance = {
    cloud: new Lazy(() => getFirestore(firebaseInstance.cloud.value)),
    local: new Lazy(() => {
        const db = getFirestore(firebaseInstance.local.value)
        connectFirestoreEmulator(db, 'localhost', 8089)
        return db
    }),
}

const firebaseFacade = {
    cloud: new Lazy(() => {
        console.log('Configuring CLOUD firebase facade')
        return new FirebaseFacade(firebaseInstance.cloud.value, firestoreInstance.cloud.value)
    }),
    local: new Lazy(() => {
        console.log('Configuring LOCAL firebase facade')
        return new FirebaseFacade(firebaseInstance.local.value, firestoreInstance.local.value)
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
        return firebaseFacade[environment].value
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

