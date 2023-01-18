import db from './db'
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore'

export default async function putGrad(mark) {
    let dataToSave ={}
    const userRef = doc(db, 'marks', 'data')
    const userSnap = await getDoc(userRef)

    if (userSnap.exists()) {
        dataToSave = userSnap.data()
        dataToSave.marks.push(mark)

        await updateDoc(userRef, {
            ...dataToSave
          })
    } else {
        let marks = [mark]
        dataToSave.marks = marks

        await setDoc(userRef, {
            ...dataToSave
        })
    }

    return
}