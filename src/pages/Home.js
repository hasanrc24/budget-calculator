import React from 'react';
import Alert from '../componenets/Alert';
import ExpenseList from '../componenets/ExpenseList';
import Form from '../componenets/Form';
import { v4 as uuidv4, v4 } from 'uuid';
import '../css/home.css'

const initialExpenses = [
    {
        id: uuidv4(),
        expense: "Rent",
        cost: 1000
    },
    {
        id: uuidv4(),
        expense: "Bike servicing",
        cost: 500
    },
    {
        id: uuidv4(),
        expense: "Cloths",
        cost: 400
    }
]

const Home = () => {

  return (
    <div className='size'>
        <h2>Budget Calculator</h2>
        <Alert />
        <div className='middle'>
            <Form />
            <ExpenseList expenses={initialExpenses} />
        </div>
        <h3>Total spending: ${
            initialExpenses.reduce((ini, curr) =>{ return ini+=curr.cost }, 0)}
        </h3>
    </div>
  )
}

export default Home