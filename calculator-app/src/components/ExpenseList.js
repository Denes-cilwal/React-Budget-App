import React from 'react'
import {ItemExpense} from "./ItemExpense";
import {MdClear} from "react-icons/md";

export const ExpenseList = ({expenses,handleEdit,handleDelete,clearItems}) => {
    return (
        <>
        <ul className="list">
        {
            expenses.map((expense) =>{
                // get key and remaining data ...
                return <ItemExpense key={expense.id} expense={expense} handleDelete={handleDelete} handleEdit={handleEdit}/>
            })
        }
        </ul>
        {expenses.length > 0 && 
        <button 
        className="btn"
        onClick={clearItems}
        >
        clear expense <MdClear className="btn-icon"/>
        </button>}
        </>
    )
}
