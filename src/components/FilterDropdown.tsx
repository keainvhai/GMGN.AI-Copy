
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterDropdownProps {
  title: string;
  options: FilterOption[];
  selectedValue?: string;
  onSelect: (value: string) => void;
  hasRange?: boolean;
}

const FilterDropdown = ({ title, options, selectedValue, onSelect, hasRange = false }: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  const handleApply = () => {
    if (hasRange) {
      onSelect(`${fromValue}-${toValue}`);
    }
    setIsOpen(false);
  };

  const handleReset = () => {
    setFromValue('');
    setToValue('');
    onSelect('');
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center space-x-1 text-gray-400 hover:text-white text-sm">
          <span>{title}</span>
          <span className="text-xs">⇅</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-64 bg-gray-800 border-gray-700 p-4">
        <div className="space-y-3">
          <h3 className="text-white font-medium">{title}</h3>
          
          {!hasRange ? (
            <div className="space-y-2">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onSelect(option.value);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white text-sm transition-colors"
                >
                  {option.label}
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFromValue(option.value)}
                  className="w-full text-left px-3 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white text-sm transition-colors"
                >
                  {option.label}
                </button>
              ))}
              
              <div className="flex items-center space-x-2 mt-4">
                <input
                  type="text"
                  placeholder="K"
                  value={fromValue}
                  onChange={(e) => setFromValue(e.target.value)}
                  className="flex-1 bg-gray-700 border border-gray-600 rounded px-2 py-1 text-white text-sm"
                />
                <span className="text-gray-400">to</span>
                <input
                  type="text"
                  placeholder="K"
                  value={toValue}
                  onChange={(e) => setToValue(e.target.value)}
                  className="flex-1 bg-gray-700 border border-gray-600 rounded px-2 py-1 text-white text-sm"
                />
              </div>
            </div>
          )}
          
          <div className="flex space-x-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="flex-1 bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
            >
              Reset
            </Button>
            <Button
              size="sm"
              onClick={handleApply}
              className="flex-1 bg-white text-black hover:bg-gray-200"
            >
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterDropdown;
