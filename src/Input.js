import React, { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setItems([...items, newTodo]);
    setInputValue("");
    console.log(items);
  };

  const removeItem = (id) => {
    const newTodo = items.filter((todo) => id !== todo.id);
    setItems(newTodo);
  };

  const displayPrompt = (id) => {
    const newTodo = items.filter((todo) => id !== todo.id);
    setItems(newTodo);

    const newName = prompt(
      "You made a mistake? What's this todo new name?",
      "enter the new name"
    );

    const newItem = {
      id: id,
      todo: newName,
    };
    setItems([...newTodo, newItem]);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button type="button" onClick={() => addItem(inputValue)}>
          Add todo
        </button>
        <h2>My Todos</h2>
        <ul>
          {items.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <span onClick={() => removeItem(todo.id)}>❌</span>
              <span
                onClick={() => {
                  removeItem(todo.id);
                  displayPrompt(todo.id);
                }}
              >
                ✏️
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Input;
