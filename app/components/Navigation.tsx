'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      <h1 className="text-4xl font-bold text-center">Bingo F1</h1>
      <div className="flex gap-4">
        <Link
          href="/"
          className={`
            px-6 py-2 rounded-full font-medium transition-colors
            ${pathname === '/' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}
          `}
        >
          Bingo
        </Link>
        <Link
          href="/classement"
          className={`
            px-6 py-2 rounded-full font-medium transition-colors
            ${pathname === '/classement' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}
          `}
        >
          Classement
        </Link>
      </div>
    </div>
  );
} 