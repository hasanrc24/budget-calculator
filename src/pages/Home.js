import React, { useEffect, useState } from 'react';
import Alert from '../componenets/Alert';
import ExpenseList from '../componenets/ExpenseList';
import Form from '../componenets/Form';
import { v4 as uuidv4 } from 'uuid';
import '../css/home.css'

const Home = () => {
    
    const initialExpense = localStorage.getItem("expense") ? JSON.parse(localStorage.getItem("expense")) : [];
    const [expense, setExpenses] = useState(initialExpense);
    const [charge, setCharge] = useState('');
    const [amount, setAmount] = useState('');
    const [alert, setAlert] = useState({status: false});
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState();
    
    useEffect(() => {
        localStorage.setItem('expense', JSON.stringify(expense));
    }, [expense])

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(charge !== '' && amount > 0){
            if(edit){
                const editExpense = expense.map((exp) => {
                    return exp.id === id ? {...exp, charge, amount} : exp
                })
                setExpenses(editExpense);
                setEdit(false);
            }
            else{
                const singleExpense = {id: uuidv4(), charge, amount};
                setExpenses([...expense, singleExpense]);
                setAlert({status: true, msg: "Added successfully"})
                setTimeout(() =>{
                    setAlert({status: false})
                }, 3000)
            }
            setCharge('');
            setAmount('');
        }
        else{
            setAlert({status: true, msg: "Please fillout the form properly"})
            setTimeout(() => {
                setAlert({status: false})
            }, 3000)
        }
    }


    const handleClear = () => {
        setExpenses([]);
        setAlert({status: true, msg: "Items Cleared"});
        setCharge('');
        setAmount('');
        setEdit(false);
        setTimeout(() => {
            setAlert({status: false})
        }, 3000)
    }

    const handleDelete = (id) => {
        const tempExpense = expense.filter((exp) => exp.id !== id);
        setExpenses(tempExpense);
        setCharge('');
        setAmount('');
        setEdit(false);
    }

    const handleEdit = (id) => {
        setEdit(true);
        const itemEdit = expense.find((exp) => exp.id === id);
        setCharge(itemEdit.charge);
        setAmount(itemEdit.amount);
        setId(id);
    }

  return (
    <div className='size'>
        <h2>Budget Calculator</h2>
        {alert.status && <Alert alert={alert} />}
        <div className='middle'>
            <Form handleSubmit={handleSubmit} charge={charge} setCharge={setCharge} amount={amount} setAmount={setAmount} edit={edit} />
            <ExpenseList expenses={expense} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
        {expense.length > 0 && <button className='btn btn-primary' onClick={() => handleClear()}>Clear all</button>}
        <h3>Total spending: ${
            expense.reduce((ini, curr) =>{ return ini+= +curr.amount }, 0)}
        </h3>
    </div>
  )
}

export default Home