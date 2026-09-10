import React from 'react';

const Expense = ({ description, cost, category }) => {
    return (
        <li className="expense">
            <h1 className='expense__title'>Description: <span>{description}</span></h1>
            <span className="expense__amount">{`{`}Cost: <span>${cost.toFixed(2)}</span>{`}`}</span>
            <p className="expense__para">Category: <span>[{category}]</span></p>
        </li>
    );
}

export default Expense;
