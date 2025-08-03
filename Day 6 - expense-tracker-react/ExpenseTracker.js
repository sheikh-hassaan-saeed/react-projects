import React, { useState } from "react";

function ExpenseTracker() {
    const [expenses, setExpenses] = useState([]);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");

    const addExpense = (e) => {
        e.preventDefault();

        if (!title.trim() || isNaN(parseFloat(amount))) {
            alert("Please enter valid details!");
            return;
        }

        const newExpense = {
            id: Date.now(),
            title: title.trim(),
            amount: parseFloat(amount),
        };

        setExpenses((prev) => [...prev, newExpense]);
        setTitle("");
        setAmount("");
    };

    const deleteExpense = (id) => {
        setExpenses((prev) => prev.filter((exp) => exp.id !== id));
    };

    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

    return (
        <div>

            <form className="form" onSubmit={addExpense}>
                <input
                    type="text"
                    placeholder="Expense Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button type="submit">Add Expense</button>
            </form>

            <ul className="expense-list">
                {expenses.map((exp) => (
                    <li key={exp.id}>
                        {exp.title} - Rs. {exp.amount}
                        <button onClick={() => deleteExpense(exp.id)}>❌</button>
                    </li>
                ))}
            </ul>

            <h2>Total: Rs. {total}</h2>
        </div>
    );
}

export default ExpenseTracker;
