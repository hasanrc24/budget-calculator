import React from 'react'
import ExpenseItem from './ExpenseItem';
import '../css/expense-list.css'

const ExpenseList = ({expenses, handleEdit, handleDelete}) => {
  return (
    <div className='xpns list-group list-group-flush'>
      {
        expenses.map((exp) => {
          return <ExpenseItem key={exp.id} expenses={exp} handleEdit={handleEdit} handleDelete={handleDelete}/>
        })
      }
    </div>
  )
}

export default ExpenseList