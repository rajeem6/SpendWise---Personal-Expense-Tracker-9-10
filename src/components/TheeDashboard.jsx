import React, { useEffect, useState } from "react";
import DashboardChart from "./dashboardChart";
import Expense from "../ui/Expense";
import { Auth, db } from "../firebase/firebase.js";
import { addDoc, collection, getDocs } from "firebase/firestore";

const TheeDashboard = ({ user }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [animate, setAnimate] = useState(false);

  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  function handleAddExpense(e) {
    e.preventDefault();

    if (category === "") return;

    const newExpense = {
      id: Date.now(),
      description: desc,
      amount: Number(amount),
      category: category,
    };
    setExpenses([...expenses, newExpense]);

    // Reset Form
    setDesc("");
    setAmount("");
    setCategory("");

    addExpense(newExpense);
  }

  // firestore

  async function addExpense(newExpense) {
    const data = await addDoc(
      collection(db, "users", user.uid, "expenses"),
      newExpense,
    );
    getExpense();
  }

  async function getExpense() {
    const dataRef = await getDocs(
      collection(db, "users", user.uid, "expenses"),
    );
    const ExpensesData = dataRef.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    setExpenses(ExpensesData);
  }

  useEffect(() => {
    if (user) {
      getExpense();
    }
  }, [user]);

  return (
    <section id="dashboard">
      <div className="container">
        <div className="row dashboard__row">
          <div className="dashboard__left">
            <DashboardChart
              desc={desc}
              amount={amount}
              category={category}
              expenses={expenses}
            />
          </div>
          <div className="dashboard__right">
            <h2 className="dashboard__right__title">SpendWise</h2>
            <h3 className="dashboard__right__subtitle">Expense Tracker</h3>
            <form
              onSubmit={handleAddExpense}
              className="dashboard__right-configuration"
            >
              <div className="dashboard__right__input__wrapper">
                <input
                  required
                  value={desc}
                  onChange={(event) => setDesc(event.target.value)}
                  type="category"
                  className="dashboard__right__input desc-input"
                  placeholder="Description - Rent"
                />
                <input
                  required
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  type="Number"
                  className="dashboard__right__input amount__input"
                  placeholder="Amount - $"
                />
              </div>
              <select
                onChange={(event) => setCategory(event.target.value)}
                id="select-category"
                className="dashboard__right-select-category"
                value={category}
              >
                <option
                  value=""
                  className="dashboard__right-select-category__option"
                  disabled
                >
                  Category
                </option>
                <option
                  value="Food"
                  className="dashboard__right-select-category__option"
                >
                  Food
                </option>
                <option
                  value="Transport"
                  className="dashboard__right-select-category__option"
                >
                  Transport
                </option>
                <option
                  value="Entertainment"
                  className="dashboard__right-select-category__option"
                >
                  Entertainment
                </option>
                <option
                  value="Other"
                  className="dashboard__right-select-category__option"
                >
                  Other
                </option>
              </select>
              <button
                onClick={() => setAnimate(true)}
                type="submit"
                className="dashboard__right__add"
              >
                Add Expense
              </button>
            </form>
          </div>
        </div>
        <div className={`dashboard__expenses row ${animate && "animateNow"}`}>
          <div className="dashboard__expenses-header">
            <h3 className="dashboard__expenses-title">Your List</h3>
          </div>
          <h6>
            Total Expenses: ${" "}
            <span className="total">{total.toFixed(2)}</span>{" "}
          </h6>
          <ul className="dashboard__expenses__list__wrapper">
            {expenses.length > 0
              ? expenses.map((expense, index) => (
                  <Expense
                    key={index}
                    description={expense.description}
                    cost={expense.amount}
                    category={expense.category}
                    id={expense.id}
                    user={user}
                    setExpenses={setExpenses}
                    expenses={expenses}
                  />
                ))
              : "{ - EXPENSES WILL SHOW UP HERE - }"}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TheeDashboard;
