import { useParams } from 'react-router-dom';
import { useWallets } from '../contexts/WalletsContext';

function WalletDetailPage() {
  const { walletId } = useParams();
  const { wallets } = useWallets();

  const wallet = wallets.find((w) => w.id === parseInt(walletId));

  if (!wallet) {
    return <p className="text-red-500">Wallet not found!</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Wallet: {wallet.name}</h1>
      <p className="mb-2">Balance: ${wallet.balance}</p>
      <p className="text-gray-600">We’ll show the transactions for this wallet here soon!</p>
    </div>
  );
}

export default WalletDetailPage;