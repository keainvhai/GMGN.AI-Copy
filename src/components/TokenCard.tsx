
import React from 'react';
import { TrendingUp } from 'lucide-react';

interface TokenCardProps {
  name: string;
  symbol: string;
  icon: string;
  address: string;
  timeAgo: string;
  holders: number;
  transactions: number;
  marketCap: string;
  volume: string;
  priceChange: number;
  price: string;
  isRunning?: boolean;
}

const TokenCard = ({ 
  name, 
  symbol, 
  icon, 
  address, 
  timeAgo, 
  holders, 
  transactions, 
  marketCap, 
  volume, 
  priceChange, 
  price,
  isRunning 
}: TokenCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
            {icon ? (
              <img src={icon} alt={symbol} className="w-full h-full object-cover" />
            ) : (
              <span className="text-sm font-bold">{symbol.substring(0, 2)}</span>
            )}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-white">{name}</h3>
              <span className="text-gray-400 text-sm">{symbol}</span>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-xs text-gray-500">{timeAgo}</span>
              <span className="text-xs text-gray-500">{address}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 text-xs">
            <span className="text-gray-400">👥</span>
            <span className="text-white">{holders}</span>
            <span className="text-gray-400">TX</span>
            <span className="text-white">{transactions}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span className={`text-sm font-medium ${priceChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(1)}%
            </span>
          </div>
          
          {isRunning && (
            <div className="flex items-center space-x-1">
              <span className="text-pink-400 text-xs">🏃</span>
              <span className="text-pink-400 text-xs">Run</span>
            </div>
          )}
        </div>

        <div className="text-right">
          <div className="text-sm text-white">V {volume}</div>
          <div className="text-xs text-gray-400">MC {marketCap}</div>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
