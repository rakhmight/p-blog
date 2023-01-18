import db from './db'
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore'

export default async function getMarks() {
    const userRef = doc(db, 'marks', 'data')
    const userSnap = await getDoc(userRef)
    let result

    if (userSnap.exists()) {
        result = userSnap.data()
        result = result.marks
    }

    return result
}