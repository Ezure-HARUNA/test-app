import React, {  useContext  } from 'react';
import AppContext from '../contexts/AppContext'



const ThisWeek = ({stack}) => {
  // const { state, dispatch } = useContext(AppContext);
  const taskId = stack.taskId
    return (
        <React.Fragment>
          <h2>{taskId}</h2>
          <h2>{stack.task}</h2>
        </React.Fragment>
    )
}

export default ThisWeek