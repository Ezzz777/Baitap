import React from 'react';


export default function ExpenseItem({name, amount , date }) {

    return (
        <div className='expense-item'>
            <div className='expen-date'>{date}</div>
            <div className='expen-name'>{name} </div>
            <div className='expen-amount'>$ {amount}</div>
        </div>
        
    );
}