import React, {  useState } from 'react'
// import { TodosProvider } from '../contexts/todos'
import { TextField, Button } from '@material-ui/core'
import styled from 'styled-components'
import { useCreateWant } from './helpers/useCreateWant'


const StyledTextField = styled(TextField)`
  && {
    margin: 5px;
  }
`
const AddButton = styled(Button)`
  && {
    margin: 5px;
  }
`

const Form = () => {
    // const { add } = useContext(TodosContext)
    const [createWant] = useCreateWant()
    const [text, setText] = useState('')

    const handleChange = (e) => {
      // createWant({text})
      console.log(e.target.value)
      setText(e.target.value)
      // myContext.setWantTodo(e.target.value)
    }

    const handleClick = (e) => {
      // createWant({text: text.value} )
      createWant({text} )
      // myContext.setWantTodo(e.target.value)
    }

    return (
      <form onSubmit={(e) => e.preventDefault()}>
          <StyledTextField
            // value={text}
            label="やること" 
            onChange={handleChange}
            type="text"
            fullWidth
            margin="normal"
          />
            <AddButton color="primary" onClick={handleClick}>
                Add
            </AddButton>
        </form>
    )
}

export default Form
