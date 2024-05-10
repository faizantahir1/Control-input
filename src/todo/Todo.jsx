import React, { useState } from 'react'
import SingleTodo from './SingleTodo';

  const Todo = () => {
  const [todo , setTodo] = useState ('')
  const [error , setError] = useState (false);
  const [data , setData] = useState ([])
  const removeTodo = (id) => {
        const newTodos= data.filter((item) =>{
            return item.id !== id
        })
        setData (newTodos)
  }
  const addTodo = (e) => {
    e.preventDefault ()
    if (!todo) {
        setError (true)
        setTimeout(() => {
            setError (false)
        }, 2000);
    } else  {
        setData ([...data , {id: Date.now() , todo }])
        setTodo('')
    }
  }
    return (
    <>
     <div className="container col-lg-5 mx-auto p-5 shadow">
        <h1 className="display-4 text-center">Todo List</h1>
        <form>
            <label htmlFor="">Todo</label>
            <input value={todo} onChange={(e)=>setTodo (e.target.value)} type="text" placeholder='Please Enter todo....'className='form-control' />
            {error && <p className="text-danger fw-bolder m-0 p-0">Please Add todo
                </p>}
            <button onClick={addTodo} className="btn btn-primary my-2 w-100">Add</button>
        </form>
        </div>
        <div className="container">
            <div className="row">
                {data.map((item,index)=>{
                    return <SingleTodo key={index}  {...item} remove={removeTodo} />
                 })}
            </div>
        </div>
      </>
  )
}

export default Todo