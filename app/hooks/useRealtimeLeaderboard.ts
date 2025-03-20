import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase/config';

interface BingoCell {
  content: string;
  state: 'default' | 'validated' | 'lost';
}

interface PlayerScore {
  participant: string;
  validatedCount: number;
}

interface GridData {
  [participant: string]: BingoCell[];
}

export function useRealtimeLeaderboard() {
  const [scores, setScores] = useState<PlayerScore[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const gridsRef = ref(database, 'grids');

    const unsubscribe = onValue(gridsRef, (snapshot) => {
      const data = snapshot.val() as GridData | null;
      if (!data) {
        setScores([]);
        setIsLoading(false);
        return;
      }

      // Calculer les scores pour chaque participant
      const playerScores = Object.entries(data).map(([participant, grid]: [string, BingoCell[]]) => ({
        participant,
        validatedCount: grid.filter((cell) => cell.state === 'validated').length
      }));

      // Trier par nombre de cases validées
      const sortedScores = playerScores.sort((a, b) => b.validatedCount - a.validatedCount);
      setScores(sortedScores);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { scores, isLoading };
} 