// ./src/helpers/useCreateThread.js
// import React from 'react'
import { firestore } from 'firebase/app'
import { useState } from 'react'

export const useGetWant = () => {
  const [loading, setLoading] = useState(false)
  const [want, setWant] = useState([]);
  const [currentUser, setCurrentUser] = useState(null)

  const getWant = async (id) => {
    if (loading) return

    setLoading(true)

    const now = firestore.Timestamp.now()

    //!➀スレッドを追加する
    const wantRef = firestore().collection('wants').doc()
    // console.log(firestore().collection('wants'))
    // const docId = firestore().collection('wants').doc().id
    const result = await wantRef.get()
    // console.log(result.data())

    wantRef.where('uid', '==', currentUser.uid).onSnapshot(query => {
        const data = []
        query.forEach(d => data.push({ ...d.data(), docId: d.id }))
        setWant(data)
      })



    //レスポンスを追加する
    // const Ref = threadRef.collection('responses').doc()

    // //!➁データを追加
    await wantRef.set({
    //   createdAt: now,
    //   updatedAt: now,
      docId: wantRef.id,
      isComplete: false,
      text: "text",
    })

    setLoading(false)
    
    return result.data()
  }

  

  return [getWant, loading]
}
