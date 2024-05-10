import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";


const SingleTodo = ({id , todo , remove}) => {
  return (
    <>
    <div className="col-lg-3 my-2">
        <div className="d-flex justify-content-between align-items-center" style={{wordBreak:'break-word'}}>
        <h3>{todo}</h3>
        <FaRegTrashAlt onClick={()=>remove (id)  } color='red' cursor={'pointer'}/>

     </div>
   </div>
   </>
  )
}

export default SingleTodo