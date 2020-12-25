import { firestore } from 'firebase/app'
import { useState, useMemo, useContext } from 'react'
// import { AuthContext } from '../contexts/auth'

export const useDeleteWant = () => {
    const [loading, setLoading] = useState(false)
    const [want, setWant] = useState([]);
    
    

  const deleteWant = async ({ text, updatedAt, isComplete, purpose, rewards }) => {
    if (loading) return

    setLoading(true)

    const now = firestore.Timestamp.now()

    const wantRef = firestore().collection('wants');
    const docId = firestore().collection('wants').doc().id
    // wantRef.doc(e.target.value).delete();
    // const result = await wantRef.get()

      //データを追加
    await firestore().collection('wants').doc(docId).delete();
    // docId: docId,
    // //   createdAt: now,
    //   updatedAt: now,
    // // test:'test'
    // text: text,
    // // isComplete: false,
    // isComplete: "isComplete",
    // // purpose: purpose,
    // purpose: "purpose",
    // // rewards: rewards,
    // rewards: "rewards",
    // // category: category,
    // })

    setLoading(false);

    // return result
    }
return [deleteWant, loading]
}
