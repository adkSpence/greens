import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import WalletsPage from './pages/WalletsPage';
import TransactionsPage from './pages/TransactionsPage';
import WalletDetailPage from './pages/WalletDetailPage';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-green-700 text-white flex space-x-4">
        <Link to="/wallets" className="hover:underline">Wallets</Link>
        <Link to="/transactions" className="hover:underline">Transactions</Link>
      </nav>
      <div className="p-6">
        <Routes>
          {/* Default route redirects to /wallets */}
          <Route path="/" element={<Navigate to="/wallets" />} />

          {/* Wallets page */}
          <Route path="/wallets" element={<WalletsPage />} />

          {/* Wallet detail page */}
          <Route path="/wallets/:walletId" element={<WalletDetailPage />} />

          {/* Transactions page (general view) */}
          <Route path="/transactions" element={<TransactionsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;