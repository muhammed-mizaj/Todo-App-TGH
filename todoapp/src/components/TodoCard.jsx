import React from 'react'
const BASE_URL = 'http://localhost:8000/api/todos'
import axios from 'axios'
let handleFinished = (fid)=>{
    axios.put(BASE_URL+`/finish/${fid}`,{data:{}},{headers: {Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjk2YzhkNzY2ODcwMzk5YjIxMTc5NCIsImlhdCI6MTY2MzY5NjI5NywiZXhwIjoxNjY2Mjg4Mjk3fQ.C7Xg-w6RSZlZn03XpwIyjpjEwOYEBkkFV5M0VJvRDoA`}}
    ).then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })
}
let handleCancel = (fid)=>{
    axios.put(BASE_URL+`/cancel/${fid}`,{data:{}},{headers: {Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjk2YzhkNzY2ODcwMzk5YjIxMTc5NCIsImlhdCI6MTY2MzY5NjI5NywiZXhwIjoxNjY2Mjg4Mjk3fQ.C7Xg-w6RSZlZn03XpwIyjpjEwOYEBkkFV5M0VJvRDoA`}}
    ).then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })
}

let handleDelete = async(fid)=>{
    await axios({
        method:"delete",
        url:BASE_URL+`/delete/${fid}`,
        headers: {Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjk2YzhkNzY2ODcwMzk5YjIxMTc5NCIsImlhdCI6MTY2MzY5NjI5NywiZXhwIjoxNjY2Mjg4Mjk3fQ.C7Xg-w6RSZlZn03XpwIyjpjEwOYEBkkFV5M0VJvRDoA`},
      }
      ).then((response)=>{
        console.log(response);
        SetTodos([...todos,response.data])
      }).catch((error)=>{
        console.log(error);
      })

}

const TodoCard = ({todo}) => {
    const id =todo._id
    console.log(todo._id);
  return (
    <div className='flex flex-row bg-slate-500 justify-evenly w-screen p-2 m-2'>
        <div className='p-2 m-2'> 
        {todo.priority}
        </div>
        
        <div className='p-2 m-2'> 
        {todo.title}
        </div>
        {
            todo.is_cancelled?(<h1 className='bg-blue-700 p-2 m-2 rounded-3xl'>Valid</h1>):(<h1 className='bg-gray-700 p-2 m-2 rounded-3xl'>Invalid</h1>)
        }
        <button className='bg-gray-900 p-2 m-2'  onClick={()=>handleCancel(todo._id)} >
        {todo.is_cancelled?(<h6>Re Add </h6>):(<h6>Cancel</h6>)}</button>
        {
            todo.is_finished?(<h1 className='bg-green-700 p-2 m-2 rounded-3xl'>Completed</h1>):(<h2 className='bg-red-700 p-2 m-2 rounded-3xl'>Not Completed</h2>)
        }
        
        <button className='bg-cyan-900 p-2 m-2' onClick={()=>handleFinished(todo._id)} >Done</button>
        <button className='bg-red-900 p-2 m-2' onClick={()=>handleDelete(todo._id)}>Delete</button>


        
        </div>
    
  )
}

export default TodoCard