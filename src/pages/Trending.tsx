
import React, { useState } from 'react';
import FilterDropdown from '@/components/FilterDropdown';

const Trending = () => {
  const [activeTab, setActiveTab] = useState('1h');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const tabs = ['1m', '5m', '1h', '6h', '24h'];

  const trendingTokens = [
    {
      id: 'trump',
      name: 'TRUMP',
      symbol: 'TRUMP',
      logo: '/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png',
      address: '6p6xg...iPN',
      age: '146d',
      liquidity: '489.4M',
      marketCap: '$9.9B',
      blueChip: '2.3%',
      holders: '628.3',
      smart: '41/452',
      transactions: { buys: 37725, sells: 18586, total: 19139 },
      volume: '$5.9M',
      price: '$0.001567',
      change: -0.3,
      verified: true,
      trending: true,
    },
    {
      id: 'bonk',
      name: 'Bonk',
      symbol: 'Bonk',
      logo: '/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png',
      address: 'DezXA...263',
      age: '618d',
      liquidity: '3.1M',
      marketCap: '$1.2B',
      blueChip: '4.2%',
      holders: '507.2',
      smart: '33/352',
      transactions: { buys: 27875, sells: 12388, total: 15487 },
      volume: '$419.6K',
      price: '$0.0002',
      change: 0.1,
      verified: true,
      trending: true,
    },
    {
      id: 'swif',
      name: '$WIF',
      symbol: '$WIF',
      logo: '/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png',
      address: 'EKpQG...cjm',
      age: '521d',
      liquidity: '14.3M',
      marketCap: '$826.6M',
      blueChip: '12%',
      holders: '231.3',
      smart: '30/188',
      transactions: { buys: 26785, sells: 13435, total: 13350 },
      volume: '$22.3M',
      price: '$0.0003',
      change: 0.5,
      verified: true,
      trending: true,
    },
    {
      id: 'fartcoin',
      name: 'Fartcoin',
      symbol: 'Fartcoin',
      logo: '/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png',
      address: '9BB6N...ump',
      age: '238d',
      liquidity: '38.1M',
      marketCap: '$1.1B',
      blueChip: '7.6%',
      holders: '159.1',
      smart: '17/214',
      transactions: { buys: 26237, sells: 13118, total: 13119 },
      volume: '$21.1M',
      price: '$0.0002',
      change: 0,
      verified: true,
      trending: false,
    },
    {
      id: 'popcat',
      name: 'POPCAT',
      symbol: 'POPCAT',
      logo: '/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png',
      address: '7GCih...2hr',
      age: '521d',
      liquidity: '12.4M',
      marketCap: '$301.8M',
      blueChip: '18.5%',
      holders: '142.5',
      smart: '19/259',
      transactions: { buys: 25852, sells: 12863, total: 12989 },
      volume: '$11.4M',
      price: '$0.001',
      change: 0.4,
      verified: true,
      trending: false,
    },
    {
      id: 'zenai',
      name: 'ZENAI',
      symbol: 'ZENAI',
      logo: '/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png',
      address: '5DKLa...ump',
      age: '10d',
      liquidity: '177.9K',
      marketCap: '$1M',
      blueChip: '5.4%',
      holders: '78.6K',
      smart: '-/10',
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
    <div className="p-2 md:p-4 max-w-full mx-auto bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className="flex items-center space-x-2 md:space-x-4">
          <h1 className="text-lg md:text-2xl font-bold">Trending</h1>
          <span className="text-gray-400 text-sm">🔥 NextBC</span>
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm">
          <button className="flex items-center space-x-1 hover:text-green-400">
            <span>👥</span>
            <span className="hidden sm:inline">Devs</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-green-400">
            <span>🔧</span>
            <span className="hidden sm:inline">Filter</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-green-400">
            <span>💰</span>
            <span className="hidden sm:inline">Buy</span>
          </button>
          <span>=</span>
          <span>0</span>
          <div className="flex space-x-1 md:space-x-2">
            <span className="px-1 md:px-2 py-1 bg-gray-700 rounded text-xs">P1</span>
            <span className="px-1 md:px-2 py-1 bg-gray-700 rounded text-xs">P2</span>
            <span className="px-1 md:px-2 py-1 bg-gray-700 rounded text-xs">P3</span>
          </div>
        </div>
      </div>

      {/* Time Tabs */}
      <div className="flex items-center space-x-4 md:space-x-6 mb-4 md:mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-2 md:px-3 py-1 rounded text-xs md:text-sm transition-colors ${
              activeTab === tab
                ? 'bg-gray-700 text-white'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table Container with Horizontal Scroll */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Table Header */}
            <div className="px-2 md:px-4 py-2 md:py-3 border-b border-gray-700 grid grid-cols-12 gap-1 md:gap-2 text-xs text-gray-400 items-center">
              <div className="col-span-3 md:col-span-2">
                <button className="flex items-center space-x-1 hover:text-white text-xs">
                  <span>Token</span>
                  <span>⇅</span>
                </button>
              </div>
              <div className="hidden md:block">
                <FilterDropdown
                  title="Age"
                  options={ageOptions}
                  onSelect={(value) => console.log('Age filter:', value)}
                />
              </div>
              <div className="hidden md:block">
                <FilterDropdown
                  title="Liq"
                  options={liquidityOptions}
                  onSelect={(value) => console.log('Liquidity filter:', value)}
                  hasRange={true}
                />
              </div>
              <div className="hidden md:block">
                <button className="flex items-center space-x-1 hover:text-white text-xs">
                  <span>MC</span>
                  <span>⇅</span>
                </button>
              </div>
              <div className="hidden md:block">
                <button className="flex items-center space-x-1 hover:text-white text-xs">
                  <span>BlueChip</span>
                  <span>⇅</span>
                </button>
              </div>
              <div className="hidden lg:block">
                <FilterDropdown
                  title="Holders"
                  options={holdersOptions}
                  onSelect={(value) => console.log('Holders filter:', value)}
                />
              </div>
              <div className="hidden lg:block">
                <button className="flex items-center space-x-1 hover:text-white text-xs">
                  <span>Smart / KOL</span>
                  <span>⇅</span>
                </button>
              </div>
              <div className="hidden xl:block">
                <button className="flex items-center space-x-1 hover:text-white text-xs">
                  <span>1h TXs</span>
                  <span>⇅</span>
                </button>
              </div>
              <div className="hidden xl:block">
                <button className="flex items-center space-x-1 hover:text-white text-xs">
                  <span>1h Vol</span>
                  <span>⇅</span>
                </button>
              </div>
              <div className="hidden sm:block">
                <button className="flex items-center space-x-1 hover:text-white text-xs">
                  <span>Price</span>
                  <span>⇅</span>
                </button>
              </div>
              <div>
                <button className="flex items-center space-x-1 hover:text-white text-xs">
                  <span>1h%</span>
                  <span>⇅</span>
                </button>
              </div>
              <div className="text-right">
                <span className="text-xs">Buy</span>
              </div>
            </div>

            {/* Table Body */}
            <div>
              {trendingTokens.map((token, index) => (
                <div
                  key={token.id}
                  className="px-2 md:px-4 py-2 md:py-3 border-b border-gray-700 last:border-b-0 hover:bg-gray-750 transition-colors grid grid-cols-12 gap-1 md:gap-2 items-center text-xs md:text-sm"
                >
                  {/* Token Info - Fixed on Left */}
                  <div className="col-span-3 md:col-span-2 flex items-center space-x-1 md:space-x-2 min-w-0">
                    <button
                      onClick={() => toggleFavorite(token.id)}
                      className={`text-sm md:text-lg hover:scale-110 transition-transform flex-shrink-0 ${
                        favorites.has(token.id) ? 'text-yellow-400' : 'text-gray-500'
                      }`}
                    >
                      {favorites.has(token.id) ? '★' : '☆'}
                    </button>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">🔥</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-white flex items-center space-x-1">
                        <span className="truncate text-xs md:text-sm">{token.name}</span>
                        <button 
                          className="text-blue-400 hover:text-blue-300 flex-shrink-0"
                          title="Search on Twitter"
                        >
                          🔍
                        </button>
                      </div>
                      <div className="text-xs text-gray-500 truncate">{token.address}</div>
                    </div>
                  </div>

                  {/* Age - Hidden on Mobile */}
                  <div className="hidden md:block text-white text-xs">{token.age}</div>

                  {/* Liquidity - Hidden on Mobile */}
                  <div className="hidden md:block text-white text-xs">{token.liquidity}</div>

                  {/* Market Cap - Hidden on Mobile */}
                  <div className="hidden md:block text-white text-xs">{token.marketCap}</div>

                  {/* BlueChip - Hidden on Mobile */}
                  <div className="hidden md:block text-white text-xs">{token.blueChip}</div>

                  {/* Holders - Hidden on Mobile/Tablet */}
                  <div className="hidden lg:block text-white text-xs">{token.holders}</div>

                  {/* Smart / KOL - Hidden on Mobile/Tablet */}
                  <div className="hidden lg:block text-white text-xs">{token.smart}</div>

                  {/* Transactions - Hidden on Mobile/Small Tablet */}
                  <div className="hidden xl:block text-white text-xs">
                    <div>{token.transactions.buys.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">
                      {token.transactions.sells.toLocaleString()}/{token.transactions.total.toLocaleString()}
                    </div>
                  </div>

                  {/* Volume - Hidden on Mobile/Small Tablet */}
                  <div className="hidden xl:block text-white text-xs">{token.volume}</div>

                  {/* Price - Hidden on Mobile */}
                  <div className="hidden sm:block text-white text-xs">{token.price}</div>

                  {/* Price Change */}
                  <div className={`font-medium text-xs ${
                    token.change > 0 ? 'text-green-400' : token.change < 0 ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {formatChange(token.change)}
                  </div>

                  {/* Buy Button - Fixed on Right */}
                  <div className="flex justify-end">
                    {/* Desktop Buy Button */}
                    <button className="hidden md:flex bg-green-500 hover:bg-green-600 text-black px-2 md:px-3 py-1 rounded text-xs font-medium transition-colors items-center space-x-1">
                      <span>💰</span>
                      <span>Buy</span>
                    </button>
                    {/* Mobile Buy Button - Green Circle */}
                    <button className="md:hidden w-6 h-6 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                      <div className="w-3 h-3 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white">⚡</span>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
