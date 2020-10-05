import React, { createContext, useReducer } from 'react'
import Store from '../Store/index'

const initialState = {
  task: [], 
  description: [], 
  purpose: [],
  rewards: [], 
  category: [],
}


const reducer = (state, action) => {
  switch(action.type) {
    case 'FOLLOW_TO_TASK_THIS_WEEK':
      const stack = { task: action.task, week: action.week, category: action.category }
      const length = state.length
      const taskId = length === 0 ? 1 : state[length - 1].taskId + 1
      return [...state, { taskId, ...stack}]
    default:
      return state
  }
}

export const SiteContext = React.createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
      <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  )
}

export default StoreProvider



 // const [taskId, setTaskId] =React.useState("")
  // const [wantTodo, setWantTodo] = React.useState("")
  // const [description, setDescription] = React.useState("")
  // const [purpose, setPurpose] = React.useState("")
  // const [rewards, setRewards] = React.useState("")
  // const [category, setCategory] = React.useState("")