import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Expense = ({
  description,
  cost,
  category,
  id,
  user,
  setExpenses,
  expenses,
}) => {
  async function deleteExpense(id) {
    const Expense = doc(db, "users", user.uid, "expenses", id);

    await deleteDoc(Expense);

    const expensesFilter = expenses.filter((expense) => expense.id !== id);

    setExpenses(expensesFilter);
  }

  return (
    <li className="expense">
      <h1 className="expense__title">
        Description: <span>{description}</span>
      </h1>
      <span className="expense__amount">
        {`{`}Cost: <span>${cost.toFixed(2)}</span>
        {`}`}
      </span>
      <p className="expense__para">
        Category: <span>[{category}]</span>
      </p>
      <button
        onClick={() => deleteExpense(id)}
        className="expense-close"
      >{`[ Delete ]`}</button>
    </li>
  );
};

export default Expense;
