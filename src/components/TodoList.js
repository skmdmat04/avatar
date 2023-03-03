import React, { useEffect, useState } from 'react'
import edit from '../assets/edit.png'
import deleteIcon from '../assets/delete.png';
import {fetchTask,createTask,deleted} from '../api/FetchApi'
import Chart from './Chart';
import './todo.css'
const TodoList = () => {
    const [tasks,setTasks]=useState([])
    const[title,setTitle]=useState('');
    const[link,setLink]=useState('')
    const addTask=async(e)=>{
      e.preventDefault();
    if(title && link){
 await createTask({title,link})
 fetchTask().then(data=>setTasks(data))
setTitle('')
setLink('')
}
  else alert('Enter valid data')
    }
  const deleteTask=async(id)=>{
    await deleted(id);
   const task= await fetchTask();
   setTasks(task)
  }
   useEffect(()=>{
    fetchTask().then((data)=>setTasks(data))
   },[])
   
  return (
    <div className="todo">
        <Chart/>
        <h2>Add Task</h2>
        <form className='form'>
            <label>Title</label>
            <input type={'text'} value={title}onChange={e=>setTitle(e.target.value)} /><br/>
            <label>Todo Link</label>
            <input type={'text'} value={link}onChange={e=>setLink(e.target.value)} /><br/>
            <button onClick={addTask}>Add task</button>
        </form>
     <h2>Shoping List</h2>
     <div className='list'>
     {tasks.map(val=><div className='task' key={val._id}>
      <a href={val.link} className='left' target={'_blank'}><img src={val.iconUrl}/>
        <h3>{val.title}</h3></a>
      <div className='right'>
        <img src={deleteIcon} onClick={async()=>{await deleteTask(val._id)}}/>
      </div>
        </div>)}
     </div>
    </div>
  )
}

export default TodoList
