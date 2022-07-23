import React from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Expenses } from './pages/Expenses/Expenses';

function App() {
  return (
    <>
      <Sidebar />
      <Expenses />
    </>
  );
}
export default App;
