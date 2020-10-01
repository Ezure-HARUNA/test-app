import React, { makeStyles, useContext  } from 'react';
import AppContext from '../contexts/AppContext'



const ThisWeek = ({stack}) => {
  const { state, dispatch } = useContext(AppContext);
  const id = stack.id
    return (
        <React.Fragment>
          <h2>{stack.task}</h2>
        </React.Fragment>
    )
}

export default ThisWeek