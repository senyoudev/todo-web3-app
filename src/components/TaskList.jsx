import React from 'react'
import './TaskList.css'
import Task from './Task'

const TaskList = ({Tasks,handleToggle}) => {
  return (
    <div className="tasks">
       <div className='task'>
        <div className="id">
            Id
        </div>
        <div className="date">
            Date
        </div>
        <div className="title">
            Task
        </div>
        <div className="author">
            Author
        </div>
        <div className="done">
            Done
        </div>
          
    </div>
   
        {Tasks.map(task => (
          
        <Task key={parseInt(task[0]._hex,16)-1} task={task} handleToggle={handleToggle}/>
        ))}
    </div>
  )
}

export default TaskList