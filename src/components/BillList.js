import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BillList() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8090/restapi/BillDtos')
      .then(response => setBills(response.data))
      .catch(error => console.error('Error fetching bills:', error));
  }, []);

  return (
    <div>
      <h2>All Bills</h2>
      <ul>
        {bills.map(bill => (
          <li key={bill.billID}>{bill.payeeName} - {bill.paymentDue}</li>
        ))}
      </ul>
    </div>
  );
}

export default BillList;