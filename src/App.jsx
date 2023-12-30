import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Transaction from './components/Transaction/Transaction';

// const INITAL_EXPENSE = [
//     {
//         id: 1,
//         task: "Pizza",
//         amount: -150,
//         payment:"Cash",
//         ExIn: false, // true = Income, false = Expenses
//         dueDate: new Date("2023-02-28"),
//     },
//     {
//         id: 2,
//         task: "Salary",
//         amount: 30000,
//         payment:"",
//         ExIn: true,
//         dueDate: new Date("2024-06-14"),
//     },
//     {
//         id: 3,
//         task: "Book",
//         amount: -300,
//         payment:"Credit Card",
//         ExIn: false,
//         dueDate: new Date("2023-05-20"),
//     },
//     {
//         id: 4,
//         task: "Camera",
//         amount: -1200,
//         payment:"Bank App",
//         ExIn: false,
//         dueDate: new Date("2024-07-26"),
//     },
// ];

const App = () => {
    return (
        <div>
            
            <div className='container'>
                <Header />
                <Transaction />
            </div>
        </div>
    )
}

export default App


