import React, { useState } from "react";
import ExpenseTracker from "./ExpenseTracker";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseTracker />
    </div>
  );
}

export default App;
