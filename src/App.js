import React, { useState,useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Form from './Form'
import Task from './Task'
import Edit from './Edit'
import firebase from 'firebase';
import "firebase/auth";
import { initializeApp } from '../src/utils/firebase'
import Progress from './Progress'
import { firestore } from 'firebase/app';
import { useGetWant } from './helpers/useGetWant'
import { useCreateWant } from './helpers/useCreateWant'
import { useUpdateWant } from './helpers/useUpdateWant'

import { useCollectionData } from 'react-firebase-hooks/firestore'

// firebase.initializeApp(initializeApp);
// export const auth = firebase.auth()
// export const db = firebase.firestore()

const App = () => {

  const query = firestore().collection('wants').orderBy('updatedAt', 'desc')

  const [wants = [], loading] = useCollectionData(query, { docId: 'id' })
  const [ getWant ] = useGetWant()
  const [ createWant ] = useCreateWant()
  const [ updateWant ] = useUpdateWant()
  const [text, setText] = useState('')
  const [ editing, setEditing ] = useState(false)

  // const getWant = useEffect(() => {
    
  //     getWant()
    
  // }, [])

   const editRow = user => {
		setEditing(true)
    
	}

  const handleUpdate = () => {
		setEditing(false)

		updateWant({text})
	}

  
  return (
    <BrowserRouter>
      <Form/>
      {/* <Task/> */}
      {wants.map((want) => (
        <Task  want={want} handleUpdate={handleUpdate} getWant={getWant}/>
      ))}
      {loading && <Progress />}
      <Edit handleUpdate={handleUpdate} setEditing={setEditing} getWant={getWant}/>
       <Route exact path='/edit' render={() => <Edit ></Edit>}></Route>

    </BrowserRouter>
  )
}

export default App

