'use client';

import { useRealtimeLeaderboard } from '../hooks/useRealtimeLeaderboard';

export default function Leaderboard() {
  const { scores, isLoading } = useRealtimeLeaderboard();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const podiumPlayers = scores.slice(0, 3);
  const otherPlayers = scores.slice(3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Podium */}
      <div className="flex justify-center items-end mb-16 h-48 gap-4">
        {/* 2ème place */}
        {podiumPlayers[1] && (
          <div className="w-24 flex flex-col items-center">
            <div className="text-xl font-bold mb-2">{podiumPlayers[1].participant}</div>
            <div className="bg-gray-300 w-full h-32 flex items-center justify-center rounded-t-lg">
              <div className="text-2xl font-bold">{podiumPlayers[1].validatedCount}</div>
            </div>
            <div className="text-xl">2</div>
          </div>
        )}

        {/* 1ère place */}
        {podiumPlayers[0] && (
          <div className="w-24 flex flex-col items-center">
            <div className="text-xl font-bold mb-2">{podiumPlayers[0].participant}</div>
            <div className="bg-yellow-300 w-full h-40 flex items-center justify-center rounded-t-lg">
              <div className="text-2xl font-bold">{podiumPlayers[0].validatedCount}</div>
            </div>
            <div className="text-xl">1</div>
          </div>
        )}

        {/* 3ème place */}
        {podiumPlayers[2] && (
          <div className="w-24 flex flex-col items-center">
            <div className="text-xl font-bold mb-2">{podiumPlayers[2].participant}</div>
            <div className="bg-amber-700 w-full h-24 flex items-center justify-center rounded-t-lg">
              <div className="text-2xl font-bold text-white">{podiumPlayers[2].validatedCount}</div>
            </div>
            <div className="text-xl">3</div>
          </div>
        )}
      </div>

      {/* Tableau des autres joueurs */}
      {otherPlayers.length > 0 && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cases validées</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {otherPlayers.map((player, index) => (
                <tr key={player.participant}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 4}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{player.participant}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.validatedCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 