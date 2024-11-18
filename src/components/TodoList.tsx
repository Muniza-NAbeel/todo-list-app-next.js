"use client";
import { useState } from "react";
import Image from "next/image";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  //Add of Items

  const addTodo = () => {
    if (inputValue.trim() === "") return;

    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);

    setInputValue("");
  };

  //Add Values id :

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete Todo Section

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <Image
        src="/a.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      <header className="relative z-10 bg-transparent text-white py-6 mt-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-verdana font-bold text-shadow-lg">
            Todo List By Muniza Nabeel
          </h1>
          <p className="font-verdana font-semibold text-lg sm:text-xl mt-4 sm:mt-8 text-shadow-lg">
            Effortlessly manage your tasks with our Todo List App
          </p>
        </div>
      </header>

      <main className="relative z-10 flex-grow flex items-center justify-center bg-transparent py-2 mb-40">
        <div className="max-w-lg w-full mx-auto p-6 bg-white/60 rounded-xl shadow-lg">
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTodo()}
                className="flex-grow p-3 border border-amber-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                placeholder="Add a new task..."
              />
              <button
                onClick={addTodo}
                className="mt-3 sm:mt-0 sm:ml-3 px-5 py-3 bg-amber-800 text-white rounded-lg shadow-md hover:bg-amber-700 active:bg-amber-600 active:scale-95 transition-all duration-200"
              >
                Add
              </button>
            </div>
          </div>

          <ul className="space-y-4">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center justify-between p-4 border border-yellow-100 rounded-lg shadow-sm ${
                  todo.completed ? "bg-lime-100 line-through" : "bg-lime-50"
                }`}
              >
                <span className="text-lg font-medium">{todo.text}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="px-4 py-2 text-sm font-semibold bg-orange-500 text-white rounded-lg hover:bg-orange-600 active:bg-orange-800 active:scale-95 transition-all duration-200"
                  >
                    {todo.completed ? "Undo" : "Complete"}
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="px-4 py-2 text-sm font-semibold bg-red-500 text-white rounded-lg hover:bg-red-600 active:bg-red-700 active:scale-95 transition-all duration-200"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default TodoList;
