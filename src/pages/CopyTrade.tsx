import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { toast } from "react-toastify";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

const CopyTrade = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [traders, setTraders] = useState([]);
  const [copiedTraders, setCopiedTraders] = useState([]);
  const [selectedTrader, setSelectedTrader] = useState(null);
  const [amount, setAmount] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [sellMethod, setSellMethod] = useState("copy");
  const [showCopiedList, setShowCopiedList] = useState(false);

  const filters = [
    "All",
    "Pump SM",
    "Smart Money",
    "KOL/VC",
    "Fresh Wallet",
    "Sniper",
  ];

  useEffect(() => {
    fetch("/data/copyTraders.json")
      .then((res) => res.json())
      .then((data) => setTraders(data))
      .catch((err) => console.error("Failed to load copyTraders.json", err));
  }, []);

  const handleConfirmCopy = () => {
    toast.success("✅ Copy successful!");
    setCopiedTraders([...copiedTraders, { ...selectedTrader, amount }]);
    setModalOpen(false);
    setAmount(1);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">CopyTrade</h1>
          <button
            className="bg-blue-600 text-white px-2 py-1 rounded text-xs hover:bg-blue-700"
            onClick={() => setShowCopiedList(!showCopiedList)}
          >
            📊 CopyTrade
          </button>
        </div>
      </div>

      {showCopiedList && (
        <div className="bg-gray-800 text-white p-4 rounded mb-6">
          <h2 className="text-lg font-semibold mb-2">Copied Traders</h2>
          {copiedTraders.length > 0 ? (
            <ul className="list-disc list-inside space-y-1">
              {copiedTraders.map((t, i) => (
                <li key={i}>
                  {t.wallet} - {t.amount} SOL
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No copied traders yet.</p>
          )}
        </div>
      )}

      <div className="flex items-center space-x-6 mb-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              activeFilter === filter
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="bg-gray-800 rounded-t-lg px-4 py-3 text-sm text-gray-400 border-b border-gray-700">
        <div className="grid grid-cols-12 gap-2 items-center">
          <div className="col-span-2">Wallet / SOL Bal⚡</div>
          <div>1D PnL⚡</div>
          <div>USD⚡</div>
          <div>7D PnL⚡</div>
          <div>30D PnL⚡</div>
          <div>7D Win Rate⚡</div>
          <div>7D TXs⚡</div>
          <div>7D Token Distribution</div>
          <div>7D Profit</div>
          <div>7D Avg Duration</div>
          <div>7D Avg Cost⚡</div>
          <div>Last⚡</div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-b-lg">
        {traders.map((trader, index) => (
          <div
            key={index}
            className="px-4 py-4 border-b border-gray-700 last:border-b-0 hover:bg-gray-750 transition-colors"
          >
            <div className="grid grid-cols-12 gap-2 items-center text-sm">
              <div className="col-span-2 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                  <span className="text-xs font-bold">🌟</span>
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="text-white font-medium">
                      {trader.wallet}
                    </span>
                    {trader.verified && (
                      <span className="text-green-400">✅</span>
                    )}
                    {trader.kol && <span className="text-blue-400">👑</span>}
                  </div>
                  <div className="text-gray-400">{trader.balance}</div>
                </div>
              </div>

              <div className="text-green-400 font-medium">
                {trader.sevenDayPnl}
              </div>
              <div className="text-white">{trader.usd}</div>
              <div className="text-green-400 font-medium">
                {trader.sevenDayPnl}
              </div>
              <div className="text-green-400 font-medium">
                {trader.sevenDayUsd}
              </div>
              <div className="text-white">{trader.winRate}</div>
              <div className="text-white">
                <div>{trader.trades}</div>
                <div className="text-xs text-gray-400">
                  {trader.distribution}
                </div>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-4 bg-green-500 rounded"></div>
                <div className="w-2 h-4 bg-gray-600 rounded"></div>
                <div className="w-2 h-4 bg-gray-600 rounded"></div>
                <div className="w-2 h-4 bg-gray-600 rounded"></div>
              </div>
              <div className="text-white">{trader.duration}</div>
              <div className="text-white">{trader.avgCost}</div>
              <div className="text-white">{trader.lastTrade}</div>
              <div>
                <button
                  className="px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700"
                  onClick={() => {
                    setSelectedTrader(trader);
                    setModalOpen(true);
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="p-6 space-y-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">CopyTrade</DialogTitle>
          </DialogHeader>

          <div>
            <label className="text-sm text-gray-400">Copy From</label>
            <input
              value={selectedTrader?.wallet || ""}
              readOnly
              className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded mt-1"
              placeholder="Enter amount in SOL"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Sell Method</label>
            <div className="flex space-x-2 mt-1">
              <button
                onClick={() => setSellMethod("copy")}
                className={`px-3 py-1 rounded ${
                  sellMethod === "copy"
                    ? "bg-green-600 text-white"
                    : "bg-gray-600 text-gray-200"
                }`}
              >
                Copy Sells
              </button>
              <button
                onClick={() => setSellMethod("not")}
                className={`px-3 py-1 rounded ${
                  sellMethod === "not"
                    ? "bg-green-600 text-white"
                    : "bg-gray-600 text-gray-200"
                }`}
              >
                Not Sells
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-1">
              Advanced Settings
            </label>
            <div className="bg-gray-700 rounded p-4 space-y-2">
              <div className="text-xs text-gray-300">Slippage: Auto</div>
              <div className="text-xs text-gray-300">
                Priority Fee (SOL): 0.005
              </div>
            </div>
          </div>

          <button
            className="w-full bg-green-500 hover:bg-green-600 text-black py-2 rounded"
            onClick={handleConfirmCopy}
          >
            Confirm
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CopyTrade;
