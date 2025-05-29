import { useWallets } from '../contexts/WalletsContext';
import WalletForm from '../components/WalletForm';
import WalletList from '../components/WalletList';

function WalletsPage() {
  const { wallets, addWallet, deleteWallet, editWallet } = useWallets();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Wallets</h1>
      <WalletForm onAddWallet={addWallet} />
      <WalletList
        wallets={wallets}
        onDeleteWallet={deleteWallet}
        onEditWallet={editWallet}
      />
    </div>
  );
}

export default WalletsPage;