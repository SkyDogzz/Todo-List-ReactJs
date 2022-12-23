import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";

import TodoListAddForm from "./TodoListAddForm";
import TodoListItems from "./TodoListItems";

export default function TodoList() {
  const itemsData = JSON.parse(localStorage.getItem("itemsData"));

  const [items, setItems] = useState(itemsData);
  const [errorMessage, setErrorMessage] = useState("");

  const setlocalStorage = (items) => {
    localStorage.setItem("itemsData", JSON.stringify(items));
  };

  const toggleTodo = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setlocalStorage(newItems);
    setItems(newItems);
  };

  const addTodo = (event) => {
    event.preventDefault();

    if (!event.target[0].value) {
      setErrorMessage("Vous ne pouvez pas ajouter une tâche vide");
      return;
    }

    setErrorMessage("");

    const newItems = [
      ...items,
      { id: uuidv1(), content: event.target[0].value, done: false },
    ];
    setlocalStorage(newItems);
    setItems(newItems);

    event.target[0].value = "";
  };

  const deleteTodo = (event) => {
    const newItems = items.filter((item) => item.id !== event);
    setlocalStorage(newItems);
    setItems(newItems);
    setlocalStorage(newItems);
    setItems(newItems);
  };

  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      <TodoListAddForm handleAdd={addTodo} />
      <TodoListItems
        items={items}
        handleClick={toggleTodo}
        handleDelete={deleteTodo}
      />
    </div>
  );
}
