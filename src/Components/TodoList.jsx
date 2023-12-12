import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');

useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
    setTodos(storedTodos);
    }
}, []);

useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

const addTodo = () => {
    if (input.trim() !== '') {
    const newTodo = {
    text: input,
    completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput('');
    }
};

const handleCheckboxChange = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
};

const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
};

return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-red-600 rounded shadow">
    <h1 className="text-2xl mb-4 text-center">To-Do List
    👀 </h1>
    <div className="mb-4 flex">
        <input
        type="text"
        value={input}
        onChange={(text) => setInput(text.target.value)}
        className="rounded-l py-2 px-4 w-full border border-solid border-gray-300"
        placeholder="TodoList"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white py-2 px-4 rounded-r">
        Hinzufügen
        </button>
    </div>
    <ul>
        {todos.map((todo, index) => (
        <TodoItem
            key={index}
            index={index}
            todo={todo}
            handleCheckboxChange={handleCheckboxChange}
            deleteTodo={deleteTodo}
        />
        ))}
    </ul>
    </div>
);
};

export default TodoList;