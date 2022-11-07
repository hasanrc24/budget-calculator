import React from 'react'
import '../css/expense-item.css'

const ExpenseItem = ({expenses}) => {

  const {id, expense, cost} = expenses;
  return (
    <ul className='cl list-group-item'>
      <li>{expense}</li>
      <li>{cost}</li>
      <li>
        <button>Edit</button>
        <button>X</button>
      </li>
    </ul>
  )
}

export default ExpenseItem