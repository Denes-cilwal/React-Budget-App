import "./App.css";
import { ExpenseList } from "./components/ExpenseList";
import { Alert } from "./components/Alert";
import { ExpenseTrackerForm } from "./components/ExpenseTrackerForm";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const InitialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "car payment", amount: 1600 },
  { id: uuidv4(), charge: "credit card bill", amount: 1600 },
];

console.log(InitialExpenses);

function App() {
  const [expenses, setExpense] = useState(InitialExpenses);
  return (
    <>
      <Alert />
      <h1>Budget Calculating App</h1>
      <main className="App">
        <ExpenseTrackerForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        {/* acc is total and curr is current item in iteration */}
        total resultAmount:
        <span className="total">
          ${" "}
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
