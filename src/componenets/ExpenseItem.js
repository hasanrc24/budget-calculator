import React from 'react'
import '../css/expense-item.css'

const ExpenseItem = ({expenses}) => {

  const {id, charge, amount} = expenses;
  return (
    <ul className='cl list-group-item'>
      <li>{charge}</li>
      <li>{amount}</li>
      <li>
        <button className='btn btn-primary'>Edit</button>
        <button className='btn btn-primary'>X</button>
      </li>
    </ul>
  )
}

export default ExpenseItem