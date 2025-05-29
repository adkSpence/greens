import { createContext, useContext, useState } from 'react';

// Create the context
const WalletsContext = createContext();

// Custom hook for easy access
export function useWallets() {
  return useContext(WalletsContext);
}

// Context provider component
export function WalletsProvider({ children }) {
  const [wallets, setWallets] = useState([
    { id: 1, name: 'Bank', balance: 1200 },
    { id: 2, name: 'Cash', balance: 300 },
  ]);

  const addWallet = (wallet) => {
    setWallets([...wallets, { ...wallet, id: Date.now() }]);
  };

  const deleteWallet = (id) => {
    setWallets(wallets.filter((w) => w.id !== id));
  };

  const editWallet = (id, updatedFields) => {
    setWallets(wallets.map((w) => (w.id === id ? { ...w, ...updatedFields } : w)));
  };

  return (
    <WalletsContext.Provider value={{ wallets, addWallet, deleteWallet, editWallet }}>
      {children}
    </WalletsContext.Provider>
  );
}