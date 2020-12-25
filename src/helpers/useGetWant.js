// ./src/helpers/useCreateThread.js
import React from 'react'
import { firestore } from 'firebase/app'
import { useState } from 'react'

export const useGetWant = () => {
  const [loading, setLoading] = useState(false)

  const getWant = async ({id, text, updatedAt}) => {
    if (loading) return

    setLoading(true)

    const now = firestore.Timestamp.now()

    //複数取る
    const wantRef = firestore().collection('wants')
    const result = await wantRef.get()
    console.log(result)
    console.log(result.data())



    //レスポンスを追加する
    // const Ref = threadRef.collection('responses').doc()

    // //!➁データを読み込む
    // await result({
    //   // docId: docId,
    //   // createdAt: now,
    //   updatedAt: now,
    //   // threadId: wantRef.id,
    //   // username: "name",
    //   text,
    // })

    setLoading(false)
    
    return result.data()
  }

  

  return [getWant, loading]
}
