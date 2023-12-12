import React from 'react';

const TodoItem = ({ todo, index, CheckboxChange, deleteTodo }) => {
  const textDecoration = todo.completed ? 'line-through' : 'none';

  return (
    <li className="flex justify-between items-center border-b border-solid border-gray-300 py-2">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => CheckboxChange(index)}
          className="mr-2"
        />
        <span style={{ textDecoration }} className="pl-1">{todo.text}</span>
      </label>
      <button onClick={() => deleteTodo()} className="text-black bg-white text-white py-2 px-2 rounded-md">
        Löschen
      </button>
    </li>
  );
};

export default TodoItem;