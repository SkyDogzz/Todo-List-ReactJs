import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";

import TodoListAddForm from "./TodoListAddForm";
import TodoListItems from "./TodoListItems";

export default function TodoList() {
  const itemsData = JSON.parse(localStorage.getItem("itemsData"));

  const [items, setItems] = useState(itemsData);
  const [errorMessage, setErrorMessage] = useState("");

  const setLocaleStorage = (items) => {
    localStorage.setItem("itemsData", JSON.stringify(items));
    console.log(localStorage);
  };

  const toggleTodo = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setItems(newItems);
    setLocaleStorage(newItems);
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
    setItems(newItems);
    setLocaleStorage(newItems);

    event.target[0].value = "";
  };

  const deleteTodo = (event) => {
    const newItems = items.filter((item) => item.id !== event);
    setItems(newItems);
    setLocaleStorage(newItems);
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
