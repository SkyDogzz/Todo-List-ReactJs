import React, { useState } from "react";
import TodoListAddForm from "./TodoListAddForm";
import TodoListItems from "./TodoListItems";

export default function TodoList() {
  const itemsData = [
    { id: 1, content: "Learn ReactJS", done: true },
    { id: 2, content: "Learn NodeJS", done: false },
  ];

  const [items, setItems] = useState(itemsData);

  const toggleTodo = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setItems(newItems);
  }

  return (
    <div>
      <TodoListAddForm />
      <TodoListItems items={items} handleClick={toggleTodo}/>
    </div>
  );
}
