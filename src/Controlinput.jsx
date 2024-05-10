import React, { useState } from 'react'

const Controlinput = () => {
 const [name , setName] = useState ('')
 const [error , setError] = useState (false);
  const getName = (e) => {
    e.preventDefault();
    if (!name) {
      setError (true)
      setTimeout (()=> {
        setError (false)
      },2000)
    } else {
      setError (false)
      console.log (name)
     setName ('')
    }
    
  }
  return (
    <>
    <div className="container p-4 col-lg-5 shadow mx-auto">
      <h1 className='text-center' >CONTROL INPUTS</h1>
    <form> 
      <label htmlFor="">Name</label>
      <input value={name} onChange={(e) => setName (e.target.value)} type="text" placeholder='Please Enter Your Name' className="form-control" />
      { error && <p className='text-danger fw-bolder'>Please Add Data</p>}
      <button onClick={getName} className="btn my-2 btn-warning w-100">Add Data</button>
    </form>
    </div>
  
    </>
  )
}

export default Controlinput