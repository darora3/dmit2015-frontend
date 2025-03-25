import logo from './logo.svg';
import './App.css';

import React from 'react';
import BillList from './components/BillList';
import AddBill from './components/AddBill';
import EditBill from './components/EditBill';

function App() {
    return (
        <div className="App">
            <h1>Bill Manager</h1>
            <BillList />
            <AddBill />
            <EditBill />
        </div>
    );
}

export default App;
