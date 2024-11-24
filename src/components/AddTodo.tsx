import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

type AddTodoProps = {
  onAdd: (text: string) => void;
};

function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border-b border-gray-100">
      <div className="flex gap-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-colors duration-200 flex items-center gap-2"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Add</span>
        </button>
      </div>
    </form>
  );
}

export default AddTodo;