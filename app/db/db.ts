import Dexie, { Table } from 'dexie';

export interface BingoCell {
  content: string;
  state: 'default' | 'validated' | 'lost';
}

export interface BingoGrid {
  id?: number;
  participant: string;
  cells: BingoCell[];
}

export class BingoDatabase extends Dexie {
  bingoGrids!: Table<BingoGrid>;

  constructor() {
    super('BingoF1Database');
    this.version(1).stores({
      bingoGrids: '++id, participant'
    });
  }
}

export const db = new BingoDatabase(); 