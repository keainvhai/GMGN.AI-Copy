
import React, { useState } from 'react';
import FilterDropdown from '@/components/FilterDropdown';

const Trending = () => {
  const [activeTab, setActiveTab] = useState('1h');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
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
      holders: '628.3K',
      smart: '41/452',
      kol: '1,554',
      kolTotal: '758/796',
      transactions: { buys: 37725, sells: 18586, total: 19139 },
      volume: '$6.3M',
      price: '$9.9275',
      change1m: 0.2,
      change5m: -0.1,
      change1h: 0.2,
      change6h: 0,
      change24h: -0.3,
      noMint: 'Yes',
      blacklist: 'No',
      burnt: '?',
      top10: '10%',
      insiders: '0%',
      degen: 'HODL',
      dev: 'HODL',
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
      holders: '507.2K',
      smart: '33/352',
      kol: '1,245',
      kolTotal: '642/698',
      transactions: { buys: 27875, sells: 12388, total: 15487 },
      volume: '$419.6K',
      price: '$0.0002',
      change1m: 0.1,
      change5m: 0.2,
      change1h: 0.1,
      change6h: 0.3,
      change24h: 0.1,
      noMint: 'Yes',
      blacklist: 'No',
      burnt: '?',
      top10: '8%',
      insiders: '2%',
      degen: 'HODL',
      dev: 'HODL',
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
      holders: '231.3K',
      smart: '30/188',
      kol: '987',
      kolTotal: '453/512',
      transactions: { buys: 26785, sells: 13435, total: 13350 },
      volume: '$22.3M',
      price: '$0.0003',
      change1m: 0.5,
      change5m: 0.3,
      change1h: 0.5,
      change6h: 0.2,
      change24h: 0.5,
      noMint: 'Yes',
      blacklist: 'No',
      burnt: '?',
      top10: '12%',
      insiders: '1%',
      degen: 'HODL',
      dev: 'HODL',
      verified: true,
      trending: true,
    },
    // ... more tokens with similar complete data structure
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

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortedTokens = () => {
    if (!sortConfig) return trendingTokens;
    
    return [...trendingTokens].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof typeof a];
      const bValue = b[sortConfig.key as keyof typeof b];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortConfig.direction === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      return 0;
    });
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(1)}%`;
  };

  const getChangeForPeriod = (token: any) => {
    switch (activeTab) {
      case '1m': return token.change1m;
      case '5m': return token.change5m;
      case '1h': return token.change1h;
      case '6h': return token.change6h;
      case '24h': return token.change24h;
      default: return token.change1h;
    }
  };

  const sortedTokens = getSortedTokens();

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
          <div className="min-w-[1400px]">
            {/* Table Header */}
            <div className="px-2 md:px-4 py-2 md:py-3 border-b border-gray-700 grid grid-cols-16 gap-1 md:gap-2 text-xs text-gray-400 items-center">
              <div className="col-span-2">
                <button 
                  onClick={() => handleSort('name')}
                  className="flex items-center space-x-1 hover:text-white text-xs"
                >
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
                <button 
                  onClick={() => handleSort('marketCap')}
                  className="flex items-center space-x-1 hover:text-white text-xs"
                >
                  <span>MC</span>
                  <span>⇅</span>
                </button>
              </div>
              <div>
                <button 
                  onClick={() => handleSort('blueChip')}
                  className="flex items-center space-x-1 hover:text-white text-xs"
                >
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
                <button 
                  onClick={() => handleSort('smart')}
                  className="flex items-center space-x-1 hover:text-white text-xs"
                >
                  <span>Smart / KOL</span>
                  <span>⇅</span>
                </button>
              </div>
              <div>
                <button 
                  onClick={() => handleSort('kol')}
                  className="flex items-center space-x-1 hover:text-white text-xs"
                >
                  <span>KOL</span>
                  <span>⇅</span>
                </button>
              </div>
              <div>
                <button 
                  onClick={() => handleSort('transactions')}
                  className="flex items-center space-x-1 hover:text-white text-xs"
                >
                  <span>1h TXs</span>
                  <span>⇅</span>
                </button>
              </div>
              <div>
                <button 
                  onClick={() => handleSort('volume')}
                  className="flex items-center space-x-1 hover:text-white text-xs"
                >
                  <span>1h Vol</span>
                  <span>⇅</span>
                </button>
              </div>
              <div>
                <button 
                  onClick={() => handleSort('price')}
                  className="flex items-center space-x-1 hover:text-white text-xs"
                >
                  <span>Price</span>
                  <span>⇅</span>
                </button>
              </div>
              <div>
                <button 
                  onClick={() => handleSort('change1m')}
                  className="flex items-center space-x-1 hover:text-white text-xs"
                >
                  <span>1m%</span>
                  <span>⇅</span>
                </button>
              </div>
              <div>
                <button 
                  onClick={() => handleSort('change5m')}
                  className="flex items-center space-x-1 hover:text-white text-xs"
                >
                  <span>5m%</span>
                  <span>⇅</span>
                </button>
              </div>
              <div>
                <button 
                  onClick={() => handleSort('change1h')}
                  className="flex items-center space-x-1 hover:text-white text-xs"
                >
                  <span>1h%</span>
                  <span>⇅</span>
                </button>
              </div>
              <div>
                <button className="flex items-center space-x-1 hover:text-white text-xs">
                  <span>Degen Audit</span>
                  <span>▼</span>
                </button>
              </div>
              <div className="text-right">
                <span className="text-xs">Buy</span>
              </div>
            </div>

            {/* Table Body */}
            <div>
              {sortedTokens.map((token, index) => (
                <div
                  key={token.id}
                  className="px-2 md:px-4 py-2 md:py-3 border-b border-gray-700 last:border-b-0 hover:bg-gray-750 transition-colors grid grid-cols-16 gap-1 md:gap-2 items-center text-xs"
                >
                  {/* Token Info - Fixed on Left */}
                  <div className="col-span-2 flex items-center space-x-1 md:space-x-2 min-w-0">
                    <button
                      onClick={() => toggleFavorite(token.id)}
                      className={`text-sm hover:scale-110 transition-transform flex-shrink-0 ${
                        favorites.has(token.id) ? 'text-yellow-400' : 'text-gray-500'
                      }`}
                    >
                      {favorites.has(token.id) ? '★' : '☆'}
                    </button>
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">🔥</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-white flex items-center space-x-1">
                        <span className="truncate text-xs">{token.name}</span>
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

                  {/* Age */}
                  <div className="text-white text-xs">{token.age}</div>

                  {/* Liquidity */}
                  <div className="text-white text-xs">{token.liquidity}</div>

                  {/* Market Cap */}
                  <div className="text-white text-xs">{token.marketCap}</div>

                  {/* BlueChip */}
                  <div className="text-white text-xs">{token.blueChip}</div>

                  {/* Holders */}
                  <div className="text-white text-xs">{token.holders}</div>

                  {/* Smart / KOL */}
                  <div className="text-white text-xs">{token.smart}</div>

                  {/* KOL */}
                  <div className="text-white text-xs">
                    <div>{token.kol}</div>
                    <div className="text-xs text-gray-400">{token.kolTotal}</div>
                  </div>

                  {/* Transactions */}
                  <div className="text-white text-xs">
                    <div>{token.transactions.buys.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">
                      {token.transactions.sells.toLocaleString()}/{token.transactions.total.toLocaleString()}
                    </div>
                  </div>

                  {/* Volume */}
                  <div className="text-white text-xs">{token.volume}</div>

                  {/* Price */}
                  <div className="text-white text-xs">{token.price}</div>

                  {/* 1m% */}
                  <div className={`font-medium text-xs ${
                    token.change1m > 0 ? 'text-green-400' : token.change1m < 0 ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {formatChange(token.change1m)}
                  </div>

                  {/* 5m% */}
                  <div className={`font-medium text-xs ${
                    token.change5m > 0 ? 'text-green-400' : token.change5m < 0 ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {formatChange(token.change5m)}
                  </div>

                  {/* 1h% */}
                  <div className={`font-medium text-xs ${
                    token.change1h > 0 ? 'text-green-400' : token.change1h < 0 ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {formatChange(token.change1h)}
                  </div>

                  {/* Degen Audit */}
                  <div className="text-white text-xs">
                    <div className="grid grid-cols-5 gap-1 text-xs">
                      <span className="text-green-400">{token.noMint}</span>
                      <span className="text-green-400">{token.blacklist}</span>
                      <span className="text-yellow-400">{token.burnt}</span>
                      <span className="text-white">{token.top10}</span>
                      <span className="text-white">{token.insiders}</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{token.degen}</div>
                  </div>

                  {/* Buy Button - Fixed on Right */}
                  <div className="flex justify-end">
                    {/* Desktop Buy Button */}
                    <button className="hidden md:flex bg-green-500 hover:bg-green-600 text-black px-2 py-1 rounded text-xs font-medium transition-colors items-center space-x-1">
                      <span>💰</span>
                      <span>Buy</span>
                    </button>
                    {/* Mobile Buy Button - Green Circle */}
                    <button className="md:hidden w-6 h-6 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                      <span className="text-xs text-white">💰</span>
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
