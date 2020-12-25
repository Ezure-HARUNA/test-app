import { firestore } from 'firebase/app'
import { useState, useMemo, useContext } from 'react'
// import { AuthContext } from '../contexts/auth'

export const useUpdateWant = () => {
  const [loading, setLoading] = useState(false)
  const [want, setWant] = useState([]);
  
//   const  currentUser  = useContext(AuthContext)


  const updateWant = async ({ text, docId, updatedAt, isComplete, purpose, rewards }) => {
    if (loading) return

    setLoading(true)

    const now = firestore.Timestamp.now()
    
    //!➀スレッドを追加する
    const wantRef = firestore().collection('wants').doc()

    //追加
    //docIdは取れている
    const result = await wantRef.get()
  //   console.log(result)
  //   console.log(result.data())
    // console.log(docId)
  //   console.log(text)
  //   //undefined
  //  console.log(updatedAt)
  //  //undefined
  //  console.log(isComplete)
  //  //undefined
  //  console.log(purpose)
  //  console.log(wantRef)
    // console.log(wantRef.get('isComplete'))
    // const wantRef = useMemo(() => {
    //   const col = firestore().collection('wants').doc()
  
    //   col.where('uid', '==', currentUser.uid).onSnapshot(query => {
    //     const data = []
    //     query.forEach(d => data.push({ ...d.data(), docId: d.id }))
    //     setWant(data)
    //   })
  
    //   return col
    // }, []


    //データを追加
    await firestore().collection('wants').doc(docId).update({
    // docId: docId,
    docId: firestore().collection('wants').doc().id,
    //   createdAt: now,
      updatedAt: now,
    // test:'test'
    text: text,
    // isComplete: false,
    isComplete: "isComplete",
    // purpose: purpose,
    purpose: "purpose",
    // rewards: rewards,
    rewards: "rewards",
    // category: category,
    })



    setLoading(false)

    return result.data()
  }

  return [updateWant, loading]
}
