import React from 'react'
import Form from './Form'
import Task from './Task'
import firebase from 'firebase';
import "firebase/auth";
import {firebaseConfig} from '../src/utils/firebase'

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const db = firebase.firestore()

const App = () => {
  
  return (
    <div>
      <Form/>
      <Task/>
    </div>
  )
}

export default App

