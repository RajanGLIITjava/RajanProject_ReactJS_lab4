import React from 'react';
import './App.css';
import '././login.css';
import ShowList from './components/ShowList';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes ,} from 'react-router';
import ExpenseTracker from './components/ExpenseTracker';
import ReportForm from './page/ReportForm';
import Login from './page/Login';

function App() {
const success =( )=>{
  return false
}
const cancel =( )=>{
  return false
}

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/ShowList' element={<ShowList></ShowList>}></Route>
            <Route path='/add' element={<ExpenseTracker onTrue={success} onClose={cancel}></ExpenseTracker>}></Route>  
            <Route path='/ReportForm' element={<ReportForm></ReportForm>}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
