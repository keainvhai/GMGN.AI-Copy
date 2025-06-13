
import React, { useState } from 'react';

const CopyTrade = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Pump SM', 'Smart Money', 'KOL/VC', 'Fresh Wallet', 'Sniper'];

  const traders = [
    {
      wallet: 'G5JSY...xTy',
      balance: '≡ 0.418',
      usd: '--',
      sevenDayPnl: '+25.7K%',
      sevenDayUsd: '+$7,585.4',
      winRate: '100%',
      trades: '21',
      distribution: '1/20',
      profit: '>500%',
      range1: '0-500%',
      range2: '<-50%',
      range3: '>-50%',
      duration: '4d',
      avgCost: '$321.2',
      lastTrade: '3c',
      verified: true,
      kol: false,
    },
    {
      wallet: '6cSx5...UK8',
      balance: '≡ 0',
      usd: '--',
      sevenDayPnl: '+24.8K%',
      sevenDayUsd: '+$13.3K',
      winRate: '100%',
      trades: '6',
      distribution: '1/5',
      profit: '>500%',
      range1: '0-500%',
      range2: '<-50%',
      range3: '>-50%',
      duration: '--',
      avgCost: '$39.9K',
      lastTrade: '6c',
      verified: true,
      kol: false,
    },
    {
      wallet: '2qJMe...BRZ',
      balance: '≡ 0.028',
      usd: '--',
      sevenDayPnl: '+10.4K%',
      sevenDayUsd: '+$947.9',
      winRate: '100%',
      trades: '4',
      distribution: '3/1',
      profit: '>500%',
      range1: '0-500%',
      range2: '<-50%',
      range3: '>-50%',
      duration: '6d',
      avgCost: '$1,105.8',
      lastTrade: '1d',
      verified: true,
      kol: false,
    },
    {
      wallet: '4qP1j...dk9',
      balance: '≡ 0.03',
      usd: '--',
      sevenDayPnl: '+10K%',
      sevenDayUsd: '+$1,930.4',
      winRate: '100%',
      trades: '4',
      distribution: '3/1',
      profit: '>500%',
      range1: '0-500%',
      range2: '<-50%',
      range3: '>-50%',
      duration: '6d',
      avgCost: '$2,005.3',
      lastTrade: '1d',
      verified: true,
      kol: false,
    },
    {
      wallet: 'HscRE...rwr',
      balance: '≡ 0.039',
      usd: '--',
      sevenDayPnl: '+9.8K%',
      sevenDayUsd: '+$1,291.8',
      winRate: '100%',
      trades: '4',
      distribution: '3/1',
      profit: '>500%',
      range1: '0-500%',
      range2: '<-50%',
      range3: '>-50%',
      duration: '6d',
      avgCost: '$1,379.1',
      lastTrade: '1d',
      verified: true,
      kol: false,
    },
    {
      wallet: '5HNeh...rzq',
      balance: '≡ 64.54',
      usd: '+10.5K%',
      sevenDayPnl: '+9.2K%',
      sevenDayUsd: '+$12.7K',
      winRate: '100%',
      trades: '28',
      distribution: '3/25',
      profit: '>500%',
      range1: '1-500%',
      range2: '<-50%',
      range3: '>-50%',
      duration: '2d',
      avgCost: '$480.3',
      lastTrade: '1d',
      verified: true,
      kol: false,
    },
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Rank</h1>
          <div className="flex items-center space-x-2">
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">📊 CopyTrade</span>
            <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">⚡ 0-Latency Alert</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-6 mb-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              activeFilter === filter
                ? 'bg-gray-700 text-white'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Table Header */}
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

      {/* Trader List */}
      <div className="bg-gray-800 rounded-b-lg">
        {traders.map((trader, index) => (
          <div key={index} className="px-4 py-4 border-b border-gray-700 last:border-b-0 hover:bg-gray-750 transition-colors">
            <div className="grid grid-cols-12 gap-2 items-center text-sm">
              <div className="col-span-2 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                  <span className="text-xs font-bold">🌟</span>
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="text-white font-medium">{trader.wallet}</span>
                    {trader.verified && <span className="text-green-400">✅</span>}
                    {trader.kol && <span className="text-blue-400">👑</span>}
                  </div>
                  <div className="text-gray-400">{trader.balance}</div>
                </div>
              </div>
              
              <div className="text-green-400 font-medium">{trader.sevenDayPnl}</div>
              <div className="text-white">{trader.usd}</div>
              <div className="text-green-400 font-medium">{trader.sevenDayPnl}</div>
              <div className="text-green-400 font-medium">{trader.sevenDayUsd}</div>
              <div className="text-white">{trader.winRate}</div>
              <div className="text-white">
                <div>{trader.trades}</div>
                <div className="text-xs text-gray-400">{trader.distribution}</div>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CopyTrade;
