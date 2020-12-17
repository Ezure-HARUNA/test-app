import React from 'react'
import Form from './Form'
import Task from './Task'
import firebase from 'firebase';
import "firebase/auth";
import { initializeApp } from '../src/utils/firebase'
import Progress from './Progress'
import { firestore } from 'firebase/app';

import { useCollectionData } from 'react-firebase-hooks/firestore'

// firebase.initializeApp(initializeApp);
// export const auth = firebase.auth()
// export const db = firebase.firestore()

const App = () => {

  const query = firestore().collection('wants').orderBy('updatedAt', 'desc')

  const [wants = [], loading] = useCollectionData(query, { docId: 'id' })
  
  return (
    <div>
      <Form/>
      {/* <Task/> */}
      {wants.map((want) => (
        <Task key={want.id} want={want} />
      ))}
      {loading && <Progress />}
    </div>
  )
}

export default App

