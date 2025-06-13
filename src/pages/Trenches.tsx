
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import TokenCard from '../components/TokenCard';

const Trenches = () => {
  const [activeTab, setActiveTab] = useState('New Creations');
  const [activeFilter, setActiveFilter] = useState('Completing');

  const tabs = ['New Creations', 'Completing', 'Completed'];
  const filters = ['Customize', 'Devs', 'Filter', 'Buy', '0'];

  const tokens = [
    {
      name: 'SHIT',
      symbol: 'shit will make u rich',
      icon: '',
      address: 'H84ec..ump',
      timeAgo: '2s',
      holders: 1,
      transactions: 3,
      marketCap: '$4.3K',
      volume: '$157.1',
      priceChange: 4.7,
      price: '$0.001',
    },
    {
      name: 'chakra',
      symbol: 'chakra',
      icon: '/placeholder.svg',
      address: 'CAeTe..ump',
      timeAgo: '2h',
      holders: 243,
      transactions: 42,
      marketCap: '$46.9K',
      volume: '$59K',
      priceChange: 95.5,
      price: '$0.1',
      isRunning: true,
    },
    {
      name: '#endthewar',
      symbol: '#endthewar',
      icon: '',
      address: 'GHZ75..ump',
      timeAgo: '1m',
      holders: 1,
      transactions: 642,
      marketCap: '$70.9K',
      volume: '$257.1K',
      priceChange: 18,
      price: '$0.1',
      isRunning: true,
    },
    {
      name: 'NODE',
      symbol: 'node',
      icon: '',
      address: '886n3..ump',
      timeAgo: '4s',
      holders: 3,
      transactions: 3,
      marketCap: '$4.6K',
      volume: '$316.2',
      priceChange: 9.2,
      price: '$0.01',
    },
    {
      name: 'WAR',
      symbol: 'We Are Retarded',
      icon: '',
      address: '4Q7Zj..ump',
      timeAgo: '2m',
      holders: 27,
      transactions: 26,
      marketCap: '$39.8K',
      volume: '$9.3K',
      priceChange: 92.1,
      price: '$0.1',
    },
    {
      name: 'HOSS',
      symbol: 'HOSS COIN',
      icon: '',
      address: '77jcp..V5j',
      timeAgo: '13m',
      holders: 1,
      transactions: 5,
      marketCap: '$156.3',
      volume: '$2.1K',
      priceChange: 5,
      price: '$0.1',
    },
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">🏠 Trenches</h1>
        
        <div className="flex items-center space-x-4">
          {filters.map((filter) => (
            <button
              key={filter}
              className="flex items-center space-x-1 px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 text-sm transition-colors"
            >
              <span>{filter}</span>
            </button>
          ))}
          <div className="flex items-center space-x-2 text-sm">
            <span>P1</span>
            <span>P2</span>
            <span>P3</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center space-x-8 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center space-x-2 pb-2 border-b-2 transition-colors ${
              activeTab === tab
                ? 'border-green-400 text-green-400'
                : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
          >
            <span>{tab === 'New Creations' ? '⚡' : tab === 'Completing' ? '🔄' : '🎯'}</span>
            <span>{tab}</span>
          </button>
        ))}
      </div>

      {/* Search Bars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
          />
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
          />
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
          />
        </div>
      </div>

      {/* Token Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tokens.map((token, index) => (
          <TokenCard
            key={index}
            {...token}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-gray-700 flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center space-x-4">
          <span>🎯 Snipe New 7</span>
          <span>🔔 Following</span>
          <span>📊 Holding</span>
          <span>📈 PnL</span>
          <span>💰 $145.03</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>🟢 Stable</span>
          <span>📧</span>
          <span>💬</span>
          <span>🐦</span>
          <span>🔗</span>
          <span>📱 APP</span>
        </div>
      </div>
    </div>
  );
};

export default Trenches;
