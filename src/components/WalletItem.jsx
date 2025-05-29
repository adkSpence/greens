import { useState } from 'react';
import { Link } from 'react-router-dom';

function WalletItem({ wallet, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(wallet.name);
  const [editedBalance, setEditedBalance] = useState(wallet.balance);

  const handleSave = () => {
    onEdit(wallet.id, { name: editedName, balance: parseFloat(editedBalance) });
    setIsEditing(false);
  };

  return (
    <div className="p-4 bg-white rounded shadow flex justify-between items-center">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="border p-1 mr-2 rounded"
          />
          <input
            type="number"
            value={editedBalance}
            onChange={(e) => setEditedBalance(e.target.value)}
            className="border p-1 mr-2 rounded"
          />
          <button
            onClick={handleSave}
            className="text-green-500 hover:text-green-700 mr-2"
          >
            Save
          </button>
        </div>
      ) : (
        <Link to={`/wallets/${wallet.id}`} className="flex-1 hover:underline">
          <span className="font-semibold">{wallet.name}</span>
          <span className="ml-4 text-gray-500">${wallet.balance}</span>
        </Link>
      )}
      <div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-blue-500 hover:text-blue-700 mr-2"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default WalletItem;