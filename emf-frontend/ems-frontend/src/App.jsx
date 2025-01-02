import React from 'react';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Employee from './components/Employee';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
      <HeaderComponent/>
      <main className= 'flex-grow-1'>
      <Routes> 
        <Route path="/" element={<ListEmployeeComponent/>}></Route>
        <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
        <Route path="/add-employee" element={<Employee/>}></Route>
        <Route path="/update-employee/:id" element={<Employee/>}></Route>
      </Routes> 
    </main>
    <FooterComponent/>
    </div>
    </BrowserRouter>
  );
}

export default App;
