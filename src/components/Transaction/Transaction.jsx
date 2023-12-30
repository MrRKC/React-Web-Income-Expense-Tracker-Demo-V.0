import React, { useState } from 'react'
import TransactionData from './TransactionData'
import TransactionItem from './TransactionItem'
import TransactionSelect from './TransactionSelect'
import Balance from '../Balance/Balance';
import IncomeExpenses from '../IncomeExpenses/IncomeExpenses';
import AddTransDataView from './AddTransDataView';

import './Transaction.css'


const Transaction = () => {
    const [transData, setTransData] = useState(TransactionData);
    const [curtransType, setCurTransType] = useState("");

    const addNewTransData = (newTrans) => {
        // console.log(newTrans)
        const newTransData = {
            ...newTrans
        }
        setTransData([newTransData, ...transData])
    }

    const editHandler = (id, trans) => {
        const newTransDataEdit = [...transData];
        const index = transData.findIndex(e => e.id === id);
        newTransDataEdit[index] = {...trans};
        setTransData(newTransDataEdit);
    }

    const deleteHandler = (id) => {
        const newTransDataDel = transData.filter(e => e.id !== id);
        setTransData(newTransDataDel);
    }

    const filteredData = transData.filter(t => t.transType !== String(curtransType)) ;

    return (
        <div className='Transaction'>
            <Balance transData={transData}/>
            <AddTransDataView addNewTransData={addNewTransData} />
            <IncomeExpenses transData={transData}/>
            <TransactionSelect curtransType={curtransType} setCurTransType={setCurTransType} />
            {
                filteredData.map((data) => (
                    <TransactionItem key = {data.id}
                        id = {data.id}
                        task = {data.task}
                        amount = {data.amount}
                        payment = {data.payment}
                        transType = {data.transType}
                        dueDate = {data.dueDate}
                        deleteHandler= {deleteHandler}
                        editHandler={editHandler}
                    />
                ))
            }
        </div>
    )
}

export default Transaction

