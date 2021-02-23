import React from 'react'
import {ItemExpense} from "./ItemExpense";
import {MdClear} from "react-icons/md";

export const ExpenseList = ({expenses}) => {
    return (
        <>
        <ul className="list">
        {
            expenses.map((expense) =>{
                // get key and remaining data ...
                return <ItemExpense key={expense.id} expense={expense}/>
            })
        }
        </ul>
        {expenses.length > 0 && 
        <button 
        className="btn"
        >
        clear expense <MdClear className="btn-icon"/>
        </button>}
        </>
    )
}
