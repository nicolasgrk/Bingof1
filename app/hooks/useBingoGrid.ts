import { useState, useEffect } from 'react';
import { db, BingoCell } from '../db/db';

export function useBingoGrid(participant: string, initialGrid: string[]) {
  const [grid, setGrid] = useState<BingoCell[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Charger ou créer la grille au montage
  useEffect(() => {
    const loadGrid = async () => {
      try {
        // Chercher la grille existante
        let bingoGrid = await db.bingoGrids.where('participant').equals(participant).first();
        
        if (!bingoGrid) {
          // Créer une nouvelle grille si elle n'existe pas
          const defaultGrid = initialGrid.map(content => ({
            content,
            state: 'default' as const
          }));
          
          const id = await db.bingoGrids.add({
            participant,
            cells: defaultGrid
          });
          
          bingoGrid = {
            id,
            participant,
            cells: defaultGrid
          };
        } else {
          // Vérifier si le contenu de la grille a changé
          const hasContentChanged = bingoGrid.cells.some(
            (cell, index) => cell.content !== initialGrid[index]
          );
          
          if (hasContentChanged) {
            // Mettre à jour avec le nouveau contenu
            const updatedGrid = initialGrid.map(content => ({
              content,
              state: 'default' as const
            }));
            
            await db.bingoGrids.update(bingoGrid.id!, {
              cells: updatedGrid
            });
            
            bingoGrid.cells = updatedGrid;
          }
        }
        
        setGrid(bingoGrid.cells);
      } catch (error) {
        console.error('Erreur lors du chargement de la grille:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadGrid();
  }, [participant, initialGrid]);

  // Mettre à jour l'état d'une cellule
  const updateCellState = async (index: number) => {
    try {
      const bingoGrid = await db.bingoGrids.where('participant').equals(participant).first();
      if (!bingoGrid) return;

      const newGrid = [...grid];
      const currentState = newGrid[index].state;
      
      // Cycle through states: default -> validated -> lost -> default
      const nextState = 
        currentState === 'default' ? 'validated' :
        currentState === 'validated' ? 'lost' : 'default';
      
      newGrid[index] = { ...newGrid[index], state: nextState };
      
      await db.bingoGrids.update(bingoGrid.id!, {
        cells: newGrid
      });
      
      setGrid(newGrid);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la cellule:', error);
    }
  };

  return {
    grid,
    isLoading,
    updateCellState
  };
} 