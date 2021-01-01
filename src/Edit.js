import React, { useState, useEffect } from 'react'
import { useCreateWant } from './helpers/useCreateWant'
import { useUpdateWant } from './helpers/useUpdateWant'

const Edit = props => {
  const [text, setText ] = useState('')
  const docId  =  'aaa';
  const [ updateWant ] = useUpdateWant()

  // useEffect(
  //   () => {
  //     setUser(props.currentUser)
  //     console.log('setUser')
  //   },

  //   [ props ]
  // )


  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]
  
  const handleClick = () => {
    updateWant({docId, text})
  }



  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser()
      }}
    >
      <label>text</label>
      <input type="text" name="name" value={props.text} />
      
      <button onClick={handleClick}>update text</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default Edit