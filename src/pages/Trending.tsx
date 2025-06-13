
import React, { useState } from 'react';
import FilterDropdown from '@/components/FilterDropdown';

const Trending = () => {
  const [activeTab, setActiveTab] = useState('1h');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const tabs = ['1m', '5m', '1h', '6h', '24h'];

  const trendingTokens = [
    {
      id: 'muskwif',
      name: 'MUSKWIF',
      symbol: 'MUSKWIF',
      logo: '/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png',
      address: 'AYZNq...ump',
      age: '9h',
      liquidity: '278.3K',
      marketCap: '$1.5M',
      blueChip: '0%',
      holders: '12.8K',
      smart: '--',
      transactions: { buys: 37725, sells: 18586, total: 19139 },
      volume: '$5.9M',
      price: '$0.001567',
      change: -0.3,
      verified: true,
      trending: true,
    },
    {
      id: 'missile',
      name: 'Missile',
      symbol: 'Missile',
      logo: '/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png',
      address: '9MQZV...ump',
      age: '40m',
      liquidity: '53.7K',
      marketCap: '$269.8K',
      blueChip: '0.1%',
      holders: '4.3K',
      smart: '--',
      transactions: { buys: 27875, sells: 12388, total: 15487 },
      volume: '$419.6K',
      price: '$0.0002',
      change: 0.1,
      verified: true,
      trending: true,
    },
    {
      id: 'goldcoin',
      name: 'goldcoin',
      symbol: 'goldcoin',
      logo: '/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png',
      address: '6oFgF...ump',
      age: '1h',
      liquidity: '80.7K',
      marketCap: '$88K',
      blueChip: '0.5%',
      holders: 219,
      smart: '-/6',
      transactions: { buys: 26785, sells: 13435, total: 13350 },
      volume: '$22.3M',
      price: '$0.0003',
      change: 0.5,
      verified: true,
      trending: true,
    },
    {
      id: 'xchat',
      name: 'XChat',
      symbol: 'XChat',
      logo: '/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png',
      address: '8aK21...UMP',
      age: '1h',
      liquidity: '151.2K',
      marketCap: '$214.4K',
      blueChip: '0%',
      holders: 210,
      smart: '--',
      transactions: { buys: 26237, sells: 13118, total: 13119 },
      volume: '$21.1M',
      price: '$0.0002',
      change: 0,
      verified: true,
      trending: true,
    },
    {
      id: 'm2',
      name: 'M2',
      symbol: 'M2',
      logo: '/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png',
      address: 'Dps45...ojs',
      age: '1h',
      liquidity: '52.4K',
      marketCap: '$755K',
      blueChip: '0.4%',
      holders: 223,
      smart: '--',
      transactions: { buys: 25852, sells: 12863, total: 12989 },
      volume: '$11.4M',
      price: '$0.001',
      change: 0.4,
      verified: true,
      trending: false,
    },
    {
      id: 'labubu',
      name: 'LABUBU',
      symbol: 'LABUBU',
      logo: '/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png',
      address: '7EX77...ump',
      age: '57m',
      liquidity: '97.9K',
      marketCap: '$57.5K',
      blueChip: '0%',
      holders: 164,
      smart: '--',
      transactions: { buys: 23044, sells: 11522, total: 11522 },
      volume: '$13.2M',
      price: '$0.0001',
      change: 0,
      verified: true,
      trending: false,
    },
  ];

  const ageOptions = [
    { label: '< 10m', value: '10m' },
    { label: '< 30m', value: '30m' },
    { label: '< 1h', value: '1h' },
    { label: '< 3h', value: '3h' },
    { label: '< 6h', value: '6h' },
    { label: '< 12h', value: '12h' },
    { label: '< 24h', value: '24h' },
  ];

  const liquidityOptions = [
    { label: '>$10K', value: '10k' },
    { label: '>$100K', value: '100k' },
    { label: '>$300K', value: '300k' },
  ];

  const holdersOptions = [
    { label: '> 100', value: '100' },
    { label: '> 500', value: '500' },
    { label: '> 1,000', value: '1000' },
  ];

  const toggleFavorite = (tokenId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(tokenId)) {
      newFavorites.delete(tokenId);
    } else {
      newFavorites.add(tokenId);
    }
    setFavorites(newFavorites);
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(1)}%`;
  };

  return (
    <div className="p-4 max-w-full mx-auto bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Trending</h1>
          <span className="text-gray-400">🔥 NextBC</span>
        </div>
        
        <div className="flex items-center space-x-4 text-sm">
          <button className="flex items-center space-x-1 hover:text-green-400">
            <span>👥</span>
            <span>Devs</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-green-400">
            <span>🔧</span>
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-green-400">
            <span>💰</span>
            <span>Buy</span>
          </button>
          <span>=</span>
          <span>0</span>
          <div className="flex space-x-2">
            <span className="px-2 py-1 bg-gray-700 rounded text-xs">P1</span>
            <span className="px-2 py-1 bg-gray-700 rounded text-xs">P2</span>
            <span className="px-2 py-1 bg-gray-700 rounded text-xs">P3</span>
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

      {/* Table */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="px-4 py-3 border-b border-gray-700 grid grid-cols-12 gap-2 text-xs text-gray-400 items-center">
          <div className="col-span-2">
            <button className="flex items-center space-x-1 hover:text-white">
              <span>Token</span>
              <span>⇅</span>
            </button>
          </div>
          <div>
            <FilterDropdown
              title="Age"
              options={ageOptions}
              onSelect={(value) => console.log('Age filter:', value)}
            />
          </div>
          <div>
            <FilterDropdown
              title="Liq"
              options={liquidityOptions}
              onSelect={(value) => console.log('Liquidity filter:', value)}
              hasRange={true}
            />
          </div>
          <div>
            <button className="flex items-center space-x-1 hover:text-white">
              <span>MC</span>
              <span>⇅</span>
            </button>
          </div>
          <div>
            <button className="flex items-center space-x-1 hover:text-white">
              <span>BlueChip</span>
              <span>⇅</span>
            </button>
          </div>
          <div>
            <FilterDropdown
              title="Holders"
              options={holdersOptions}
              onSelect={(value) => console.log('Holders filter:', value)}
            />
          </div>
          <div>
            <button className="flex items-center space-x-1 hover:text-white">
              <span>Smart / KOL</span>
              <span>⇅</span>
            </button>
          </div>
          <div>
            <button className="flex items-center space-x-1 hover:text-white">
              <span>1h TXs</span>
              <span>⇅</span>
            </button>
          </div>
          <div>
            <button className="flex items-center space-x-1 hover:text-white">
              <span>1h Vol</span>
              <span>⇅</span>
            </button>
          </div>
          <div>
            <button className="flex items-center space-x-1 hover:text-white">
              <span>Price</span>
              <span>⇅</span>
            </button>
          </div>
          <div>
            <button className="flex items-center space-x-1 hover:text-white">
              <span>1h%</span>
              <span>⇅</span>
            </button>
          </div>
        </div>

        {/* Table Body */}
        <div>
          {trendingTokens.map((token, index) => (
            <div
              key={token.id}
              className="px-4 py-3 border-b border-gray-700 last:border-b-0 hover:bg-gray-750 transition-colors grid grid-cols-12 gap-2 items-center text-sm"
            >
              {/* Token Info */}
              <div className="col-span-2 flex items-center space-x-2">
                <button
                  onClick={() => toggleFavorite(token.id)}
                  className={`text-lg hover:scale-110 transition-transform ${
                    favorites.has(token.id) ? 'text-yellow-400' : 'text-gray-500'
                  }`}
                >
                  {favorites.has(token.id) ? '★' : '☆'}
                </button>
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold">🔥</span>
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-white flex items-center space-x-1">
                    <span className="truncate">{token.name}</span>
                    {token.verified && <span className="text-blue-400">✓</span>}
                    {token.trending && <span className="text-purple-400">🔥</span>}
                  </div>
                  <div className="text-xs text-gray-500 truncate">{token.address}</div>
                </div>
              </div>

              {/* Age */}
              <div className="text-white">{token.age}</div>

              {/* Liquidity */}
              <div className="text-white">{token.liquidity}</div>

              {/* Market Cap */}
              <div className="text-white">{token.marketCap}</div>

              {/* BlueChip */}
              <div className="text-white">{token.blueChip}</div>

              {/* Holders */}
              <div className="text-white">{token.holders}</div>

              {/* Smart / KOL */}
              <div className="text-white">{token.smart}</div>

              {/* Transactions */}
              <div className="text-white">
                <div>{token.transactions.buys.toLocaleString()}</div>
                <div className="text-xs text-gray-400">
                  {token.transactions.sells.toLocaleString()}/{token.transactions.total.toLocaleString()}
                </div>
              </div>

              {/* Volume */}
              <div className="text-white">{token.volume}</div>

              {/* Price */}
              <div className="text-white">{token.price}</div>

              {/* Price Change */}
              <div className={`font-medium ${
                token.change > 0 ? 'text-green-400' : token.change < 0 ? 'text-red-400' : 'text-gray-400'
              }`}>
                {formatChange(token.change)}
              </div>

              {/* Buy Button */}
              <div className="flex justify-end">
                <button className="bg-green-500 hover:bg-green-600 text-black px-3 py-1 rounded text-xs font-medium transition-colors flex items-center space-x-1">
                  <span>💰</span>
                  <span>Buy</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
