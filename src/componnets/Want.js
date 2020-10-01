import React, { useContext, useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import reducer from '../reducers/nextToWeek'
import AppContext from '../contexts/AppContext'
import { FOLLOW_TO_TASK_THIS_WEEK } from '../actions/actions'

const Want = (props) => {
    

const { state, dispatch } = useContext(AppContext);

 
  const handleId= (e)=>{
    //e.preventDefault()
    props.setId(props.id)
  }
    const nextToPage1= (e)=>{
        //e.preventDefault()
        props.setId(props.id)

        dispatch({
          type: 'FOLLOW_TO_TASK_THIS_WEEK',
          task,
          // week,
          // category
        })
    }
    const [task, setTask] = useState('');
  return (
    <React.Fragment>
        <input type="text" value={task} onChange={e => setTask(e.target.value)}></input>
        <Link className="link" onClick={(e)=>{handleId()}} to='/thisweek'>
          <button onClick={(e)=>{nextToPage1()}}>今週やることに続く</button>
        </Link>
      </React.Fragment>
  );
}

export default Want;
