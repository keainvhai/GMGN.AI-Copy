
import React, { useState } from 'react';

const Trending = () => {
  const [activeTab, setActiveTab] = useState('1h');
  const tabs = ['1m', '5m', '1h', '6h', '24h'];

  const trendingTokens = [
    {
      name: 'TMR',
      symbol: '🔥',
      address: '6EH2V..ump',
      age: '1h',
      liquidity: '102.4K',
      marketCap: '$63K',
      blueChip: '0%',
      holders: 172,
      smart: '-/6',
      transactions: '39,704',
      volume: '$20.9M',
      price: '$0.0',
      change: '-11.6%',
      isNegative: true,
    },
    {
      name: 'GTW',
      symbol: '⚡🔥📊',
      address: '4Zk8c..ump',
      age: '3h',
      liquidity: '152.3K',
      marketCap: '$2M',
      blueChip: '0.1%',
      holders: '3.9K',
      smart: '--',
      transactions: '37,976',
      volume: '$895.7K',
      price: '$0.002',
      change: '-1.9%',
      isNegative: true,
    },
    {
      name: 'MUSKWIF',
      symbol: '🔥',
      address: 'XYZN4..ump',
      age: '9h',
      liquidity: '278.8K',
      marketCap: '$1.5M',
      blueChip: '0%',
      holders: '12.6K',
      smart: '--',
      transactions: '37,636',
      volume: '$6M',
      price: '$0.0',
      change: '-0.5%',
      isNegative: true,
    },
    {
      name: 'goldcoin',
      symbol: '🔥',
      address: '6oFgF..ump',
      age: '1h',
      liquidity: '127.2K',
      marketCap: '$246.7K',
      blueChip: '0.5%',
      holders: 219,
      smart: '-/6',
      transactions: '27,057',
      volume: '$22.5M',
      price: '$0.0002',
      change: '-22.4%',
      isNegative: true,
    },
    {
      name: 'Missile',
      symbol: '🔥🚀',
      address: '9MQZV..ump',
      age: '30m',
      liquidity: '45K',
      marketCap: '$203.7K',
      blueChip: '0%',
      holders: '4.3K',
      smart: '--',
      transactions: '26,259',
      volume: '$347.6K',
      price: '$0.0002',
      change: '+11.7%',
      isNegative: false,
    },
    {
      name: 'XChat',
      symbol: '🔥',
      address: '3aK21..UMP',
      age: '1h',
      liquidity: '149.8K',
      marketCap: '$315.9K',
      blueChip: '0%',
      holders: 210,
      smart: '--',
      transactions: '25,743',
      volume: '$20.8M',
      price: '$0.0003',
      change: '+4.1%',
      isNegative: false,
    },
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Trending</h1>
          <span className="text-gray-400">NextBC</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <span>👥 Devs</span>
          <span>🔽 Filter</span>
          <span>💰 Buy</span>
          <span>=</span>
          <span>0</span>
          <div className="flex space-x-2 text-sm">
            <span>P1</span>
            <span>P2</span>
            <span>P3</span>
          </div>
        </div>
      </div>

      {/* Time Tabs */}
      <div className="flex items-center space-x-6 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              activeTab === tab
                ? 'bg-gray-700 text-white'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table Header */}
      <div className="bg-gray-800 rounded-t-lg px-4 py-3 grid grid-cols-12 gap-4 text-sm text-gray-400 border-b border-gray-700">
        <div className="col-span-2">Token 🔽</div>
        <div>Age⚡</div>
        <div>Liq⚡</div>
        <div>MC⚡</div>
        <div>BlueChip⚡</div>
        <div>Holders⚡</div>
        <div>Smart⚡ / KOL⚡</div>
        <div>1h TXs⚡</div>
        <div>1h Vol⚡</div>
        <div>Price⚡</div>
        <div>1h%⚡</div>
      </div>

      {/* Token List */}
      <div className="bg-gray-800 rounded-b-lg">
        {trendingTokens.map((token, index) => (
          <div key={index} className="px-4 py-4 grid grid-cols-12 gap-4 items-center border-b border-gray-700 last:border-b-0 hover:bg-gray-750 transition-colors">
            <div className="col-span-2 flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                <span className="text-xs font-bold">⭐</span>
              </div>
              <div>
                <div className="font-semibold text-white flex items-center space-x-1">
                  <span>{token.name}</span>
                  <span>{token.symbol}</span>
                </div>
                <div className="text-xs text-gray-500">{token.address}</div>
              </div>
            </div>
            
            <div className="text-sm text-white">{token.age}</div>
            <div className="text-sm text-white">{token.liquidity}</div>
            <div className="text-sm text-white">{token.marketCap}</div>
            <div className="text-sm text-white">{token.blueChip}</div>
            <div className="text-sm text-white">{token.holders}</div>
            <div className="text-sm text-white">{token.smart}</div>
            <div className="text-sm text-white">
              <div>{token.transactions.split(',')[0]}</div>
              <div className="text-xs text-gray-400">{token.transactions.split(',')[1]}/{token.transactions.split(',')[2]}</div>
            </div>
            <div className="text-sm text-white">{token.volume}</div>
            <div className="text-sm text-white">{token.price}</div>
            <div className={`text-sm font-medium ${token.isNegative ? 'text-red-400' : 'text-green-400'}`}>
              {token.change}
            </div>
            <div>
              <button className="bg-green-500 hover:bg-green-600 text-black px-3 py-1 rounded text-sm font-medium transition-colors">
                💰 Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
