import React from 'react';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="app-container">
    <HeaderComponent/>
    <main className= 'flex-grow-1'>
    <ListEmployeeComponent/>
    </main>
    <FooterComponent/>
    </div>
  );
}

export default App;
