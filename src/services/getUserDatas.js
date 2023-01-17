import db from './db'
import { doc, getDoc } from 'firebase/firestore'

export default async function getUserDatas() {
    const userRef = doc(db, 'user', 'data')
    const userSnap = await getDoc(userRef)

    if (userSnap.exists()) {
        return userSnap.data()
    } else {
        return undefined
    }
}