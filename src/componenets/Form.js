import React from 'react'

const Form = ({charge, setCharge, amount, setAmount, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div  className='d-flex '>
        <input className="form-control mx-2" type="text" value={charge} onChange={(e) => setCharge(e.target.value)} placeholder="Charge" id='expense'></input>
        <input className="form-control mx-2" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" id='amount'></input>
      </div>
        <button type='submit' className='btn btn-primary mt-2'>Submit</button>
    </form>
  )
}

export default Form;