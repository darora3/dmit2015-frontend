import React, { useState } from 'react';
import axios from 'axios';

function EditBill() {
  const [id, setId] = useState('');
  const [bill, setBill] = useState(null);

  const handleFind = () => {
    axios.get(`http://localhost:8090/restapi/BillDtos/${id}`)
      .then(response => setBill(response.data))
      .catch(error => console.error('Error fetching bill:', error));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8090/restapi/BillDtos/${id}`, bill)
      .then(() => alert('Bill updated!'))
      .catch(error => console.error('Error updating bill:', error));
  };

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} placeholder="Bill ID" />
      <button onClick={handleFind}>Find</button>
      {bill && (
        <form onSubmit={handleUpdate}>
          <input type="text" value={bill.payeeName} onChange={e => setBill({ ...bill, payeeName: e.target.value })} placeholder="Payee Name" />
          <input type="date" value={bill.paymentDue} onChange={e => setBill({ ...bill, paymentDue: e.target.value })} />
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
}

export default EditBill;