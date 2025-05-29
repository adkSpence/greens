import { useState } from 'react';

function WalletForm({ onAddWallet }) {
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || balance === '') return;
    onAddWallet({ name, balance: parseFloat(balance) });
    setName('');
    setBalance('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 bg-white rounded shadow">
      <input
        type="text"
        placeholder="Wallet Name"
        className="border p-2 mr-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Initial Balance"
        className="border p-2 mr-2 rounded"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Add Wallet
      </button>
    </form>
  );
}

export default WalletForm;