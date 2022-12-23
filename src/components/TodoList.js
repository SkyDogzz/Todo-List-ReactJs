import React, { useState } from "react";
import TodoListAddForm from "./TodoListAddForm";
import TodoListItems from "./TodoListItems";

export default function TodoList() {
  const itemsData = JSON.parse(localStorage.getItem("itemsData")) 

  const [items, setItems] = useState(itemsData);

  const toggleTodo = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setItems(newItems);
  };

  const addTodo = (event) => {
    event.preventDefault();
    const newItems = [
      ...items,
      { id: items.length + 1, content: event.target[0].value, done: false },
    ];
    setItems(newItems);
  };

  return (
    <div>
      <TodoListAddForm handleAdd={addTodo} />
      <TodoListItems items={items} handleClick={toggleTodo} />
    </div>
  );
}
