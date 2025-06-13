import React, { useEffect, useState } from "react";

const WalletPage = () => {
  const [wallet, setWallet] = useState<{
    balance: string;
    transactions: any[];
  } | null>(null);

  useEffect(() => {
    fetch("/data/wallet.json")
      .then((res) => res.json())
      .then((data) => setWallet(data))
      .catch((err) => console.error("Failed to fetch wallet data:", err));
  }, []);

  if (!wallet) return <div className="p-4">Loading wallet...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Wallet Overview</h1>
      <div className="text-lg mb-4">
        💰 Balance: <span className="font-semibold">{wallet.balance}</span>
      </div>

      <h2 className="text-xl font-semibold mb-2">Transaction History</h2>
      <div className="space-y-2">
        {wallet.transactions.map((tx) => (
          <div key={tx.id} className="bg-gray-800 p-3 rounded-lg">
            <div>
              <span className="font-bold">{tx.type}</span> {tx.amount}
            </div>
            <div className="text-sm text-gray-400">{tx.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletPage;
