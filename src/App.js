import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import About from '../components/About'
import Want from './componnets/Want'
import ThisWeek from './componnets/ThisWeek'
import reducer from '../reducers'

const App = () => {
  
  const [id, setId] =React.useState("")
  const [state, dispatch] = useReducer(reducer, [])

  // やりたいことリストの番号
  // const [taskId, setTaskId] =React.useState("")
  // const [wantTodo, setWantTodo] = React.useState("")
  // const [description, setDescription] = React.useState("")
  // const [purpose, setPurpose] = React.useState("")
  // const [rewards, setRewards] = React.useState("")
  // const [category, setCategory] = React.useState("")

  return (
    <AppContext.Provider value={{ state, dispatch}}>
      <BrowserRouter>
        <Route path='/wanttodo' render={(props) => <Want id={id} setId={setId}></Want>}></Route>
        <Route path='/thisweek' render={(props) => <ThisWeek id={id} setId={setId}></ThisWeek>}></Route>
      </BrowserRouter>
    <AppContext.Provider/>   
  )
}



export default App


