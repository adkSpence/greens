import WalletItem from './WalletItem';

function WalletList({ wallets, onDeleteWallet, onEditWallet }) {
  return (
    <div className="space-y-2">
      {wallets.map((wallet) => (
        <WalletItem
          key={wallet.id}
          wallet={wallet}
          onDelete={() => onDeleteWallet(wallet.id)}
          onEdit={onEditWallet}
        />
      ))}
    </div>
  );
}

export default WalletList;