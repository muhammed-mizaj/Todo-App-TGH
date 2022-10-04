import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import TodoCard from '../components/TodoCard';
const BASE_URL = "https://4cde-2401-4900-332b-9d70-cf84-2af8-b3d5-3079.in.ngrok.io/api/todos"
const TodoList = () => {
  const [todos,SetTodos]=useState([])
  const [finishedtodos,SetFTodos]=useState([])
  const [pendingtodos,SetPTodos]=useState([])
  const [cancelledtodos,SetCTodos]=useState([])

  const [formData,setFormData]=useState({
    title:'',
    priority:1
  })
  const {title,priority}=formData

  const getTodoList = async() => {
    await axios
    .get(BASE_URL,{headers:{Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjk2YzhkNzY2ODcwMzk5YjIxMTc5NCIsImlhdCI6MTY2MzY5NjI5NywiZXhwIjoxNjY2Mjg4Mjk3fQ.C7Xg-w6RSZlZn03XpwIyjpjEwOYEBkkFV5M0VJvRDoA`}})
    .then(async(response)=>{
      
      const res = await response.data
      SetTodos(res)
      console.log(res);
    })
    .catch(error => console.log(error));
    };


  const getReport = async() => {
    await axios
    .get(BASE_URL+"/report",{headers:{Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjk2YzhkNzY2ODcwMzk5YjIxMTc5NCIsImlhdCI6MTY2MzY5NjI5NywiZXhwIjoxNjY2Mjg4Mjk3fQ.C7Xg-w6RSZlZn03XpwIyjpjEwOYEBkkFV5M0VJvRDoA`}})
    .then(async(response)=>{
      
      const res = await response.data
      SetFTodos(res.finished_todos)
      SetCTodos(res.cancelled_todos)
      SetPTodos(res.pending_todos)
      console.log(res.pending_todos,res.cancelledtodos,res.finished_todos);
    })
    .catch(error => console.log(error));
    };

    
    useEffect(()=>{
      getTodoList();
      getReport();
    },[])
    
    const handleSubmit = async(e)=>{
      e.preventDefault()

      await axios({
        method:"post",
        url:BASE_URL,
        data:formData,
        headers: {"Authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjk2YzhkNzY2ODcwMzk5YjIxMTc5NCIsImlhdCI6MTY2MzY5NjI5NywiZXhwIjoxNjY2Mjg4Mjk3fQ.C7Xg-w6RSZlZn03XpwIyjpjEwOYEBkkFV5M0VJvRDoA`},
      }
      ).then((response)=>{
        console.log(response);
        SetTodos([...todos,response.data])
      }).catch((error)=>{
        console.log(error);
      })
      
    }
    const handleChange = (e)=>{
      setFormData(({
        ...formData,
        [e.target.name]:e.target.value 
      }))
    }
  return (
    <div>
      <div className='flex flex-col bg-slate-500 w-screen'>
<div>
<h1>Finished Todos : {finishedtodos.length}</h1>
</div>
<div>
<h1>Cancelled Todos : {cancelledtodos.length}</h1>
</div>
<div>
<h1>Pending Todos : {pendingtodos.length}</h1>
</div>
      </div>
  
      <h1 className='flex flex-col justify-center text-center text-6xl'>Todo List</h1>
      {
        
        todos.map((todo,index)=>(
          <TodoCard  key={index} todo={todo}/>
        ))
      }
      <div className='flex flex-col justify-center text-center p-4 m-2'>
        <h1>Create New Todo</h1>
      <form onSubmit={handleSubmit} className="m-3 p-3">
        <input type='text' className="m-3 p-3" id='title' name='title' placeholder='Enter new Todo' value={title} onChange={handleChange}></input>
        <input type='Number' className="m-3 p-3" id='priority' name='priority' placeholder='Enter priority' value={priority} onChange={handleChange}></input>
      
        <button type='submit' className="m-3 p-3 bg-black text-white">Add</button>
      </form>
      </div>
      
    </div>
  )
}

export default TodoList