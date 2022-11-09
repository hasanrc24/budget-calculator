import React, { useState } from 'react';
import Alert from '../componenets/Alert';
import ExpenseList from '../componenets/ExpenseList';
import Form from '../componenets/Form';
import { v4 as uuidv4, v4 } from 'uuid';
import '../css/home.css'


const Home = () => {

    const [expense, setExpenses] = useState([]);
    const [charge, setCharge] = useState('');
    const [amount, setAmount] = useState('');
    const [alert, setAlert] = useState({status: false});

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(charge !== '' && amount > 0){
            const singleExpense = {id: uuidv4(), charge, amount};
            setExpenses([...expense, singleExpense]);
            setCharge('');
            setAmount('');
            setAlert({msg: "Added successfully"})
            setTimeout(() =>{
                setAlert({status: false})
            }, 3000)
        }
        else{
            setAlert({status: true, msg: "Please fillout the form properly"})
            setTimeout(() => {
                setAlert({status: false})
            }, 3000)
        }
    }
    console.log(charge)
  return (
    <div className='size'>
        <h2>Budget Calculator</h2>
        {alert && <Alert alert={alert} />}
        {/* <Alert /> */}
        <div className='middle'>
            <Form handleSubmit={handleSubmit} charge={charge} setCharge={setCharge} amount={amount} setAmount={setAmount} />
            <ExpenseList expenses={expense}  />
        </div>
        <h3>Total spending: ${
            expense.reduce((ini, curr) =>{ return ini+= +curr.amount }, 0)}
        </h3>
    </div>
  )
}

export default Home