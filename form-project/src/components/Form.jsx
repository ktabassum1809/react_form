import React from 'react'
import './Form.css'

function Form({ data, handleChange, handleSubmit }) {
  return (
    <main>
    <h2>Lead Registration</h2>
   <form onSubmit={handleSubmit}>
    <input type='text' name='name' value={data.name} onChange={handleChange} placeholder='NAME' />
    <div className='flex'>
    <input  type='tel' name='phone' value={data.phone} onChange={handleChange} placeholder='PHONE' />
    <select name='type' value={data.type} onChange={handleChange}>
          <option value=''>TYPE</option>
          <option value='option1'>PROSPECT</option>
          <option value='option2'>INTERNAL</option>
          <option value='option3'>DIRECT</option>
    </select>
    </div>
    <input type='email' name='email' value={data.email} onChange={handleChange} placeholder='EMAIL' />
    <input type='number' name='code' value={data.code} onChange={handleChange} placeholder='CODE' />
    <button onClick={handleSubmit}>Submit</button>
   
   
   
   </form>



    </main>
  )
}

export default Form