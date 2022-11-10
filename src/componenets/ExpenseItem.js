import React from 'react';
import {AiFillEdit, AiTwotoneDelete} from 'react-icons/ai'
import '../css/expense-item.css'

const ExpenseItem = ({expenses, handleEdit, handleDelete}) => {

  const {id, charge, amount} = expenses;
  return (
    <ul className='cl list-group-item'>
      <li>{charge}</li>
      <li>{amount}</li>
      <li>
        <button className='btn' onClick={() => handleEdit(id)}><AiFillEdit /></button>
        <button className='btn' onClick={()=> handleDelete(id)}><AiTwotoneDelete /></button>
      </li>
    </ul>
  )
}

export default ExpenseItem

