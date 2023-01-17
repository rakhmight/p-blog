import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDC8CUWTw1zBzzRPplN6i_5XElf_jU9EFI",
    authDomain: "pblogtelegrambot.firebaseapp.com",
    databaseURL: "https://pblogtelegrambot.firebaseio.com",
    projectId: "pblogtelegrambot",
    storageBucket: "pblogtelegrambot.appspot.com"
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db