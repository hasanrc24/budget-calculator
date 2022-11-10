import React from 'react'
import {BiSave} from 'react-icons//bi';
import {IoIosSend} from 'react-icons/io'

const Form = ({charge, setCharge, amount, setAmount, handleSubmit, edit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div  className='d-flex '>
        <input className="form-control mx-2" type="text" value={charge} onChange={(e) => setCharge(e.target.value)} placeholder="Charge" id='expense'></input>
        <input className="form-control mx-2" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" id='amount'></input>
      </div>
        {edit ? <button type='submit' className='btn btn-primary mt-2'>Save <BiSave /></button> :
        <button type='submit' className='btn btn-primary mt-2'>Submit <IoIosSend /></button>}
    </form>
  )
}

export default Form;