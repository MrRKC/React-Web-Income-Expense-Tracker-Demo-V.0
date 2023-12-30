import React, { useState } from 'react'
import './IncomeExpenses.css'

const IncomeExpenses = (props) => {
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
    const incomeTHB = new Intl.NumberFormat('th',{
        style: 'currency',
        currency: 'THB'
    }).format(income).replace("฿","");

    const expensesTHB = new Intl.NumberFormat('th',{
        style: 'currency',
        currency: 'THB'
    }).format(expenses).replace("฿","");

    return (
        <div className='IncomeExpenses'>
            <div>
                <h4>Income</h4>
                <p className="money in-plus">฿{incomeTHB}</p>
            </div>

            <div>
                <h4>Expense</h4>
                <p className="money ex-minus">฿{expensesTHB}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses