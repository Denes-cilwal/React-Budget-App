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
  /********************state ************************/
  const [expenses, setExpense] = useState(InitialExpenses);
  // single expense
  const [charge, setCharge] = useState("");
  // single amount
  const [amount, setAmount] = useState("");

  /*********************functionality**************************** */
  //charge ..
  const handleCharge = (e) => {
    setCharge(e.target.value);
    console.log(charge,"msg")
  };
  //amount ....
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  // handlesubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    // submit when there is data .... apply cond here..
    if(charge !== "" && amount > 0){

      // now must create new object here ... because all are static one...
      const singleExpenses = {id:uuidv4(), charge, amount}
      setExpense([...expenses,singleExpenses]);

      //clear input field after submitting....
      setCharge("");
      setExpense("");
    }else{
      console.log("abc")
    }
  };
  return (
    <>
      <Alert />
      <h1>Budget Calculating App</h1>
      <main className="App">
        <ExpenseTrackerForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        {/* acc is total and curr is current item in iteration */}
        total resultAmount:
        <span className="total">
          ${" "}
          {expenses.reduce((acc, curr) => {
            return acc +=parseInt(curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
