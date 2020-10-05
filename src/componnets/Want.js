import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import AppContext from '../contexts/AppContext'
// import { FOLLOW_TO_TASK_THIS_WEEK } from '../actions/actions'
import Store from '../Store/index'

const Want = (props) => {

const { globalState, setGlobalState} = useContext(Store);
// const [task, setTask] = useState('');

  const handleId= (e)=>{
    // e.preventDefault()
    props.setId(props.id)
  }
    const nextToPage1 = e =>{
        // e.preventDefault()
        setGlobalState({
          type: 'FOLLOW_TO_TASK_THIS_WEEK',
          task
        })
        setTask('')
        props.setId(e.target.value)
    }
   
  return (
    <React.Fragment>
        <input type="text" value={{task}} onChange={e => setTask(e.target.value)}></input>
        <Link className="link" onClick={(e)=>{handleId(e)}} to='/thisweek'>
          <button onClick={(e)=>{nextToPage1(e)}}>今週やることに続く</button>
        </Link>
      </React.Fragment>
  );
}

export default Want;
