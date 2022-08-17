import React from 'react'
import './Task.css'

const Task = ({task,handleToggle}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(task[0]._hex)
    }
    const date = Date(parseInt(task[1]._hex,16))
    const d = new Date(date)

    
  return (
    <div className='task'>
        <div className="id">
        {parseInt(task[0]._hex,16)}
        </div>
        <div className="date">
        {`${d.getDay()}/${d.getMonth() + 1}/${d.getFullYear()}`}
        </div>
        <div className="title">
            {task[2]}
        </div>
        <div className="author">
            {task[3]}
        </div>
        <div className="done">
            <input type="checkbox" checked={task[4]} onChange={handleClick} />
        </div>
          
    </div>
  )
}

export default Task