import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  // внесите данные с Firebase
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: ""
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db