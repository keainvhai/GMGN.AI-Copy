import React, { useState } from "react";
import FilterDropdown from "@/components/FilterDropdown";
import { useIsMobile } from "@/hooks/use-mobile";
import { Search } from "lucide-react";

const Trending = () => {
  const [activeTab, setActiveTab] = useState("1h");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const isMobile = useIsMobile();
  const tabs = ["1m", "5m", "1h", "6h", "24h"];

  const trendingTokens = [
    {
      id: "muskwif",
      name: "MUSKWIF",
      symbol: "MUSKWIF",
      logo: "/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png",
      address: "AYZNq...ump",
      age: "9h",
      liquidity: "278.3K",
      marketCap: "$1.5M",
      blueChip: "0%",
      holders: "12.8K",
      smart: "--",
      transactions: { buys: 37725, sells: 18586, total: 19139 },
      volume: "$5.9M",
      price: "$0.001567",
      change: -0.3,
      verified: true,
      trending: true,
    },
    {
      id: "missile",
      name: "Missile",
      symbol: "Missile",
      logo: "/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png",
      address: "9MQZV...ump",
      age: "40m",
      liquidity: "53.7K",
      marketCap: "$269.8K",
      blueChip: "0.1%",
      holders: "4.3K",
      smart: "--",
      transactions: { buys: 27875, sells: 12388, total: 15487 },
      volume: "$419.6K",
      price: "$0.0002",
      change: 0.1,
      verified: true,
      trending: true,
    },
    {
      id: "goldcoin",
      name: "goldcoin",
      symbol: "goldcoin",
      logo: "/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png",
      address: "6oFgF...ump",
      age: "1h",
      liquidity: "80.7K",
      marketCap: "$88K",
      blueChip: "0.5%",
      holders: 219,
      smart: "-/6",
      transactions: { buys: 26785, sells: 13435, total: 13350 },
      volume: "$22.3M",
      price: "$0.0003",
      change: 0.5,
      verified: true,
      trending: true,
    },
    {
      id: "xchat",
      name: "XChat",
      symbol: "XChat",
      logo: "/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png",
      address: "8aK21...UMP",
      age: "1h",
      liquidity: "151.2K",
      marketCap: "$214.4K",
      blueChip: "0%",
      holders: 210,
      smart: "--",
      transactions: { buys: 26237, sells: 13118, total: 13119 },
      volume: "$21.1M",
      price: "$0.0002",
      change: 0,
      verified: true,
      trending: true,
    },
    {
      id: "m2",
      name: "M2",
      symbol: "M2",
      logo: "/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png",
      address: "Dps45...ojs",
      age: "1h",
      liquidity: "52.4K",
      marketCap: "$755K",
      blueChip: "0.4%",
      holders: 223,
      smart: "--",
      transactions: { buys: 25852, sells: 12863, total: 12989 },
      volume: "$11.4M",
      price: "$0.001",
      change: 0.4,
      verified: true,
      trending: false,
    },
    {
      id: "labubu",
      name: "LABUBU",
      symbol: "LABUBU",
      logo: "/lovable-uploads/97360cf2-12fe-46cd-892c-fbb6391c351f.png",
      address: "7EX77...ump",
      age: "57m",
      liquidity: "97.9K",
      marketCap: "$57.5K",
      blueChip: "0%",
      holders: 164,
      smart: "--",
      transactions: { buys: 23044, sells: 11522, total: 11522 },
      volume: "$13.2M",
      price: "$0.0001",
      change: 0,
      verified: true,
      trending: false,
    },
  ];

  const ageOptions = [
    { label: "< 10m", value: "10m" },
    { label: "< 30m", value: "30m" },
    { label: "< 1h", value: "1h" },
    { label: "< 3h", value: "3h" },
    { label: "< 6h", value: "6h" },
    { label: "< 12h", value: "12h" },
    { label: "< 24h", value: "24h" },
  ];

  const liquidityOptions = [
    { label: ">$10K", value: "10k" },
    { label: ">$100K", value: "100k" },
    { label: ">$300K", value: "300k" },
  ];

  const holdersOptions = [
    { label: "> 100", value: "100" },
    { label: "> 500", value: "500" },
    { label: "> 1,000", value: "1000" },
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
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change.toFixed(1)}%`;
  };

  const searchOnTwitter = (tokenName: string) => {
    window.open(
      `https://twitter.com/search?q=${encodeURIComponent(tokenName)}`,
      "_blank"
    );
  };

  return (
    <div className="p-2 md:p-4 max-w-full mx-auto bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className="flex items-center space-x-2 md:space-x-4">
          <h1 className="text-lg md:text-2xl font-bold">Trending</h1>
          <span className="text-gray-400 text-sm md:text-base">🔥 NextBC</span>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm">
          <button className="flex items-center space-x-1 hover:text-green-400">
            <span>👥</span>
            <span className="hidden md:inline">Devs</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-green-400">
            <span>🔧</span>
            <span className="hidden md:inline">Filter</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-green-400">
            <span>💰</span>
            <span className="hidden md:inline">Buy</span>
          </button>
          <span>=</span>
          <span>0</span>
          <div className="flex space-x-1 md:space-x-2">
            <span className="px-1 md:px-2 py-1 bg-gray-700 rounded text-xs">
              P1
            </span>
            <span className="px-1 md:px-2 py-1 bg-gray-700 rounded text-xs">
              P2
            </span>
            <span className="px-1 md:px-2 py-1 bg-gray-700 rounded text-xs">
              P3
            </span>
          </div>
        </div>
      </div>

      {/* Time Tabs */}
      <div className="flex items-center space-x-3 md:space-x-6 mb-4 md:mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-2 md:px-3 py-1 rounded text-xs md:text-sm transition-colors whitespace-nowrap ${
              activeTab === tab
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table Container with horizontal scroll */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-[1200px]">
            {/* Table Header */}
            <div className="px-2 md:px-4 py-2 md:py-3 border-b border-gray-700 grid grid-cols-12 gap-1 md:gap-2 text-xs text-gray-400 items-center sticky top-0 bg-gray-800">
              <div className="col-span-2 sticky left-0 bg-gray-800 z-10">
                <button
                  onClick={() => handleSort("name")}
                  className="flex items-center space-x-1 hover:text-white"
                >
                  <span>Token</span>
                  <span>⇅</span>
                </button>
              </div>
              <div>
                <FilterDropdown
                  title="Age"
                  options={ageOptions}
                  onSelect={(value) => console.log("Age filter:", value)}
                />
              </div>
              <div>
                <FilterDropdown
                  title="Liq"
                  options={liquidityOptions}
                  onSelect={(value) => console.log("Liquidity filter:", value)}
                  hasRange={true}
                />
              </div>
              <div>
                <button
                  onClick={() => handleSort("marketCap")}
                  className="flex items-center space-x-1 hover:text-white"
                >
                  <span>MC</span>
                  <span>⇅</span>
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleSort("blueChip")}
                  className="flex items-center space-x-1 hover:text-white"
                >
                  <span>BlueChip</span>
                  <span>⇅</span>
                </button>
              </div>
              <div>
                <FilterDropdown
                  title="Holders"
                  options={holdersOptions}
                  onSelect={(value) => console.log("Holders filter:", value)}
                />
              </div>
              <div>
                <button
                  onClick={() => handleSort("smart")}
                  className="flex items-center space-x-1 hover:text-white"
                >
                  <span>Smart / KOL</span>
                  <span>⇅</span>
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleSort("transactions")}
                  className="flex items-center space-x-1 hover:text-white"
                >
                  <span>1h TXs</span>
                  <span>⇅</span>
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleSort("volume")}
                  className="flex items-center space-x-1 hover:text-white"
                >
                  <span>1h Vol</span>
                  <span>⇅</span>
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleSort("price")}
                  className="flex items-center space-x-1 hover:text-white"
                >
                  <span>Price</span>
                  <span>⇅</span>
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleSort("change")}
                  className="flex items-center space-x-1 hover:text-white"
                >
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
                  className="px-2 md:px-4 py-2 md:py-3 border-b border-gray-700 last:border-b-0 hover:bg-gray-750 transition-colors grid grid-cols-12 gap-1 md:gap-2 items-center text-xs md:text-sm"
                >
                  {/* Token Info - Sticky Left */}
                  <div className="col-span-2 flex items-center space-x-2 sticky left-0 bg-gray-800 z-10 pr-2">
                    <button
                      onClick={() => toggleFavorite(token.id)}
                      className={`text-base md:text-lg hover:scale-110 transition-transform ${
                        favorites.has(token.id)
                          ? "text-yellow-400"
                          : "text-gray-500"
                      }`}
                    >
                      {favorites.has(token.id) ? "★" : "☆"}
                    </button>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">🔥</span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-white flex items-center space-x-1">
                        <span className="truncate text-xs md:text-sm">
                          {token.name}
                        </span>
                        <button
                          onClick={() => searchOnTwitter(token.name)}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                          title="Search on Twitter"
                        >
                          <Search size={12} />
                        </button>
                        {token.trending && (
                          <span className="text-purple-400">🔥</span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {token.address}
                      </div>
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

                  {/* Transactions */}
                  <div className="text-white text-xs">
                    <div>{token.transactions.buys.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">
                      {token.transactions.sells.toLocaleString()}/
                      {token.transactions.total.toLocaleString()}
                    </div>
                  </div>

                  {/* Volume */}
                  <div className="text-white text-xs">{token.volume}</div>

                  {/* Price */}
                  <div className="text-white text-xs">{token.price}</div>

                  {/* Price Change */}
                  <div
                    className={`font-medium text-xs ${
                      token.change > 0
                        ? "text-green-400"
                        : token.change < 0
                        ? "text-red-400"
                        : "text-gray-400"
                    }`}
                  >
                    {formatChange(token.change)}
                  </div>

                  {/* Buy Button - Sticky Right */}
                  <div className="col-span-1 sticky right-0 bg-gray-800 z-10 flex justify-end items-center pl-2">
                    {isMobile ? (
                      <button className="bg-green-500 hover:bg-green-600 text-black w-6 h-6 md:w-8 md:h-8 rounded-full text-xs font-bold transition-colors flex items-center justify-center">
                        💰
                      </button>
                    ) : (
                      <button className="bg-green-500 hover:bg-green-600 text-black px-2 md:px-3 py-1 rounded text-xs font-medium transition-colors flex items-center space-x-1">
                        <span>💰</span>
                        <span>Buy</span>
                      </button>
                    )}
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
