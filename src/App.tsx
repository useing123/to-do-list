import React, { useState } from 'react';
import { PlusCircle, CheckCircle2, Circle, Trash2, SunMedium } from 'lucide-react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Header from './components/Header';

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: crypto.randomUUID(), text, completed: false }]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-violet-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Header />
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <AddTodo onAdd={addTodo} />
          <TodoList 
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              {completedCount} of {todos.length} tasks completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;