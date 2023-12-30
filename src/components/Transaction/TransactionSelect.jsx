import React from 'react'
import { FaFilter } from "react-icons/fa";

const TransactionSelect = (props) => {
    const value = props.curtransType;
    const onChange = (e => props.setCurTransType(e.target.value));
    // console.log(value)
    // console.log(typeof value)
    return (
        <div className="TransSelect-header">
            <div className="TransSelect-label">
                <FaFilter /> Filter
            </div>
            <div className="TransSelect">
                <select value={value} onChange={onChange}>
                    <option value="">All</option>
                    <option value="EXPENSES">Income</option>
                    <option value="INCOME">Expense</option>                
                </select>
            </div>  
        </div>
    )
}

export default TransactionSelect