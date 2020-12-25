import React, { useState, useEffect } from 'react'
import { useCreateWant } from './helpers/useCreateWant'
import { useUpdateWant } from './helpers/useUpdateWant'

const Edit = props => {
  const [text, setText ] = useState('')
  const [ user, setUser ] = useState(props.currentUser)
  const [ createWant ] = useCreateWant()
  const [ updateWant ] = useUpdateWant()

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = e => {
     props.getWant()
  }
  
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
      <input type="text" name="name" value={props.text} onChange={handleInputChange} />
      
      <button onClick={handleClick}>update text</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default Edit