import React, { useState } from 'react';
import axios from 'axios';

function AddBill() {
  const [formData, setFormData] = useState({ payeeName: '', paymentDue: '', paid: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8090/restapi/BillDtos', formData)
      .then(() => alert('Bill added!'))
      .catch(error => console.error('Error adding bill:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={formData.payeeName} onChange={e => setFormData({ ...formData, payeeName: e.target.value })} placeholder="Payee Name" />
      <input type="date" value={formData.paymentDue} onChange={e => setFormData({ ...formData, paymentDue: e.target.value })} />
      <button type="submit">Add Bill</button>
    </form>
  );
}

export default AddBill;