import React from 'react'
import './Balance.css'

const Balance = (props) => {
    const transData = props.transData

    // Calculate Income
    const income = (transData.filter(transData => transData.transType === "INCOME")
    .map(transData => transData.amount)
    .reduce((total, transData) => (total + transData), 0));

    // Calculate Expenses
    const expenses = (transData.filter(transData => transData.transType === "EXPENSES")
    .map(transData => transData.amount)
    .reduce((total, transData) => (total + transData), 0));

    // Format number to currency
    const balance = new Intl.NumberFormat('th',{
        style: 'currency',
        currency: 'THB'
    }).format(income - expenses).replace("฿","");

    return (
        <div className='balance'>
            <h4>Your Balance</h4>
            <h1>฿ {balance}</h1>
        </div>
    )
}

export default Balance