import React from 'react';
import { Heart, Copyright } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4">
        <p className="text-gray-600 flex items-center justify-center gap-2">
          <Copyright className="h-4 w-4" /> Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by Abhirup Kumar
        </p>
      </div>
    </footer>
  );
}