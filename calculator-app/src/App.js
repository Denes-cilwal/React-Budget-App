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


function App() {
  /********************state ************************/
  // expense
  const [expenses, setExpenses] = useState(InitialExpenses);
  // charge
  const [charge, setCharge] = useState("");
  // amount
  const [amount, setAmount] = useState("");
  // alert
  const [alert, setAlert] = useState({ show: false });



  /*********************functionality**************************** */
  //charge ..
  const handleCharge = (e) => {
    setCharge(e.target.value);
    console.log(charge, "msg");
  };
  //amount ....
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });

    // call settimeout function
    setTimeout(() => {
      setAlert({ show: false });
    }, 5000);
  };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: uuidv4(), charge, amount };
      // append with initial object
      setExpenses([...expenses, singleExpense]);
      handleAlert({ type: "success", text: "item added" });
      // set charge back to empty string
      setCharge("");
      // set amount back to zero
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount value has to be bigger than zero`,
      });
       
    }
  };
  return (
    <>
    {/* show alert if condition is false ... */}
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseTrackerForm
          handleSubmit={handleSubmit}
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total Sum :
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;