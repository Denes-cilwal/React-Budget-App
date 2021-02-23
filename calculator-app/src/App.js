import './App.css';
import {ExpenseList} from "./components/ExpenseList"
import {Alert} from "./components/Alert"
import {ExpenseTrackerForm} from "./components/ExpenseTrackerForm";

function App() {
  return (
      <>
     <ExpenseList/>
     <Alert/>
     <ExpenseTrackerForm/>
     </>
  );
}

export default App;
