'use client';

import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // État initial
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window === 'undefined') {
        return initialValue;
      }

      const item = window.localStorage.getItem(key);
      if (item) {
        const parsed = JSON.parse(item);
        // Si les données sont valides, les retourner
        if (Array.isArray(parsed)) {
          return parsed as T;
        }
      }
      // Si pas de données valides dans le localStorage, utiliser initialValue
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } catch (error) {
      console.error('Erreur lors de la lecture du localStorage:', error);
      return initialValue;
    }
  });

  // Effet pour synchroniser avec localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.error('Erreur lors de la sauvegarde dans le localStorage:', error);
      }
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
} 