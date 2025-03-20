import { useEffect, useState } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { database } from '../firebase/config';

interface BingoCell {
  content: string;
  state: 'default' | 'validated' | 'lost';
}

export function useRealtimeBingo(participant: string, initialGrid: string[]) {
  const [grid, setGrid] = useState<BingoCell[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const gridRef = ref(database, `grids/${participant}`);
    
    // Première initialisation si nécessaire
    const initializeGrid = async () => {
      const initialCells = initialGrid.map(content => ({
        content,
        state: 'default'
      }));
      await set(gridRef, initialCells);
    };

    // Écouter les changements en temps réel
    const unsubscribe = onValue(gridRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        initializeGrid();
      } else {
        setGrid(data);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [participant, initialGrid]);

  const updateCellState = async (index: number) => {
    const newGrid = [...grid];
    const currentState = newGrid[index].state;
    
    // Rotation des états: default -> validated -> lost -> default
    if (currentState === 'default') newGrid[index].state = 'validated';
    else if (currentState === 'validated') newGrid[index].state = 'lost';
    else newGrid[index].state = 'default';

    // Mettre à jour Firebase
    const gridRef = ref(database, `grids/${participant}`);
    await set(gridRef, newGrid);
  };

  return { grid, isLoading, updateCellState };
} 