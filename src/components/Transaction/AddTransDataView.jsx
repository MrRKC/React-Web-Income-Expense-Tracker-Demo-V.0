import React, { useState } from 'react'

const AddTransDataView = (props) => {
    const [task, setTask] = useState("")
    const [amount, setAmount] = useState("")
    const [payment, setPayment] = useState("Cash")
    const [transType, setTransType] = useState("INCOME")

    const [toggle, setToggle] = useState(false)

    const clickHandler = () => {
        const newTrans = {
            id: Math.floor(Math.random() * 100000000),
            task,
            amount: Number(amount),
            payment,
            transType,
        }
        props.addNewTransData(newTrans);

        setTask("");
        setAmount("");
        setPayment("Cash");
        setTransType("INCOME");
        setToggle(false);
    }

    const clickCancel = () => {
        setTask("");
        setAmount("");
        setPayment("");
        setTransType("INCOME");
        setToggle(false);
    }

    const blockInvalidChar = (e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

    return (
        toggle ? (
            <div className="add-container">
                <div className="btn">
                    <button className='btn-cancel' onClick={clickCancel}>Cancel</button>
                 </div>
                <div className="input-container">
                    <div>
                        <label htmlFor='text'>Text</label>
                        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter text..."/>
                    </div>

                    <div>
                        <label>Amount</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} min="0" placeholder="Enter Amount..." onKeyDown={blockInvalidChar}/>
                    </div>

                    <div className="select">
                        <label htmlFor='select'>Payment:</label>
                        <select className="select-header" value={payment} onChange={(e) => setPayment(e.target.value)}>
                            {/* <option value="">- Select Payment -</option> */}
                            <option value="Cash">Cash</option>
                            <option value="Credit Card">Credit Card</option> 
                            <option value="Bank App">Bank App</option>     
                            <option value="Bank">Bank</option>              
                        </select>
                    </div>

                    <div className="radio">
                        <input 
                            type="radio" 
                            id="INCOME"
                            name="type"
                            value={"INCOME"}
                            checked={transType === "INCOME"}
                            onChange={(e) => setTransType(e.target.value)}
                        />
                        <label htmlFor="INCOME">Income</label>

                        <input 
                            type="radio" 
                            id="EXPENSES"
                            name="type"
                            value={"EXPENSES"}
                            checked={transType === "EXPENSES"}
                            onChange={(e) => setTransType(e.target.value)}
                        />
                        <label htmlFor="EXPENSES">Expense</label>
                    </div>
                    
                        <div className="btn">
                            <button className="btn-ANT" onClick={clickHandler}>Add 
                        Transaction</button>
                        </div>      
                </div>
            </div>
        ) : (
            <div className="btn">
                <button className="btn-ANT" onClick={() => setToggle(true)}>Add New 
            Transaction</button>
            </div>
        )
        
    )
}

export default AddTransDataView