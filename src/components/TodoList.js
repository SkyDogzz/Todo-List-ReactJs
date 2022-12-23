import React, { useState } from "react";
import TodoListAddForm from "./TodoListAddForm";
import TodoListItems from "./TodoListItems";

export default function TodoList() {
  const itemsData = JSON.parse(localStorage.getItem("itemsData")) 

  const [items, setItems] = useState(itemsData);

  const setLocaleStorage = (items) => {
    localStorage.setItem("itemsData", JSON.stringify(items));
    console.log(localStorage)
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
    const newItems = [
      ...items,
      { id: items.length + 1, content: event.target[0].value, done: false },
    ];
    setItems(newItems);
    setLocaleStorage(newItems);
  };

  return (
    <div>
      <TodoListAddForm handleAdd={addTodo} />
      <TodoListItems items={items} handleClick={toggleTodo} />
    </div>
  );
}
