import React from 'react';
import { CheckCircle2, Circle, Trash2 } from 'lucide-react';
import type { Todo } from '../App';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p>No tasks yet. Add one above to get started!</p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-gray-100">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 group"
        >
          <button
            onClick={() => onToggle(todo.id)}
            className="flex-shrink-0 focus:outline-none"
          >
            {todo.completed ? (
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            ) : (
              <Circle className="w-6 h-6 text-gray-400" />
            )}
          </button>
          <span
            className={`flex-1 ${
              todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'
            }`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => onDelete(todo.id)}
            className="opacity-0 group-hover:opacity-100 focus:opacity-100 p-1 text-gray-400 hover:text-red-500 transition-colors duration-200"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;