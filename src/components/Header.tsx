import React from 'react';
import { CheckSquare } from 'lucide-react';

function Header() {
  return (
    <header className="text-center">
      <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm border border-gray-100 mb-4">
        <CheckSquare className="w-6 h-6 text-violet-600" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Task Master</h1>
      <p className="text-gray-600">Stay organized, focused, and productive</p>
    </header>
  );
}

export default Header;