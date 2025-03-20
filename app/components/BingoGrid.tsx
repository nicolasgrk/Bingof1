'use client';

import { useRealtimeBingo } from '../hooks/useRealtimeBingo';

interface BingoGridProps {
  participant: string;
  initialGrid: string[];
}

export default function BingoGrid({ participant, initialGrid }: BingoGridProps) {
  const { grid, isLoading, updateCellState } = useRealtimeBingo(participant, initialGrid);

  if (isLoading) {
    return (
      <div className="w-full max-w-md mx-auto p-4 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">{participant}</h2>
      <div className="grid grid-cols-3 gap-4 aspect-square">
        {grid.map((cell, index) => (
          <button
            key={index}
            onClick={() => updateCellState(index)}
            className={`
              relative w-full h-full
              rounded-lg border-2 border-gray-300
              flex items-center justify-center p-2
              transition-colors duration-200 group
              ${cell.state === 'validated' ? 'bg-green-500 text-white' : ''}
              ${cell.state === 'lost' ? 'bg-red-500 text-white' : ''}
              ${cell.state === 'default' ? 'bg-white hover:bg-gray-50' : ''}
            `}
          >
            <div className="absolute inset-2">
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-[10px] sm:text-xs md:text-sm text-center font-medium leading-tight break-words overflow-hidden">
                  {cell.content}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
} 