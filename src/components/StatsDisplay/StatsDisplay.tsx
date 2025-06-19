import React from 'react';
import type { StatsDisplayProps } from '../../types';
export const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, showReadingTime = false }) => {
  const isWordCountLow = stats.wordCount < 25;
  const isWordCountHigh = stats.wordCount > 100;
  return (
    <div className="w-full mt-6 bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div>
        <p className="text-gray-500 text-lg">Characters</p>
        <p className="text-2xl text-gray-800">{stats.characterCount}</p>
      </div>
      <div>
        <p className="text-gray-500 text-lg">Words</p>
        <p className={`text-2xl ${isWordCountLow || isWordCountHigh ? 'text-red-600' : 'text-gray-800'}`}>
          {stats.wordCount}
        </p>
        <p className="text-sm text-gray-500 mt-1">Min: 25 | Max: 100</p>
      </div>
      {showReadingTime && (
        <div>
          <p className="text-gray-500 text-lg">Reading Time</p>
          <p className="text-2xl text-gray-800">
            {Math.floor(stats.readingTime)}:{Math.round((stats.readingTime % 1) * 60).toString().padStart(2, '0')}
          </p>
        </div>
      )}
    </div>
  );
};