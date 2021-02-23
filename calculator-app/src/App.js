import "./App.css";
import { ExpenseList } from "./components/ExpenseList";
import { Alert } from "./components/Alert";
import { ExpenseTrackerForm } from "./components/ExpenseTrackerForm";
import { v4 as uuidv4 } from 'uuid';


const InitialExpenses = [
  { id:uuidv4(), charge: "rent", amount: 1600 },
  { id:uuidv4(), charge: "car payment", amount: 1600 },
  { id:uuidv4(), charge: "credit card bill", amount: 1600 },
];

console.log(InitialExpenses)

function App() {
  return (
    <>
      <ExpenseList />
      <Alert />
      <ExpenseTrackerForm />
    </>
  );
}

export default App;
