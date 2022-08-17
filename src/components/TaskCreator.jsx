import React, { useState } from 'react'
import './TaskCreator.css'

const TaskCreator = ({addTask}) => {
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(title,author)
        addTask(title,author)
        setAuthor('')
        setTitle('')
    }
  return (
    <div className='form__task'>
        <h2 className='form__task-title'>
            Create a Task
        </h2>
        <form onSubmit={submitHandler} className='form'>
            <div className="form__task-group">
                <label htmlFor="title">
                    Task
                </label>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                />
            </div>
            <div className="form__task-group">
                <label htmlFor="title">
                    Author
                </label>
                <input 
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)} 
                />
            </div>
            <button type="submit" className='form__task-submit'>Add this task</button>
        </form>
    </div>
  )
}

export default TaskCreator