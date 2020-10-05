import React, {  useContext, useEffect  } from 'react';
import AppContext from '../contexts/AppContext'



const ThisWeek = ({id, setId}) => {
  console.log(id)
  useEffect(() => {
    return (e) => {
      setId(e.target.value)

    };
  }, [])
  // const taskId = stack.taskId
    return (
        <React.Fragment>
          {/* <h2>{taskId}</h2> */}
          {/* <h2>{stack.task}</h2> */}
          <h2>{id}</h2>
          {/* <h2>{taskId}</h2> */}
        </React.Fragment>
    )
}

export default ThisWeek