import React from "react";
import TodoListAddForm from "./TodoListAddForm";
import TodoListItems from "./TodoListItems";

export default function TodoList() {
    const items = [
        { id: 1, content: "Learn ReactJS", done: true},
        { id: 2, content: "Learn NodeJS", done: false}
    ];
  return (
    <div>
        <TodoListAddForm />
        <TodoListItems items={items}/>
    </div>
  );
}
