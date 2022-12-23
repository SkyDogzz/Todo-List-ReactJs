import React from "react";
import TodoListAddForm from "./TodoListAddForm";
import TodoListItems from "./TodoListItems";

export default function TodoList() {
  return (
    <div>
        <TodoListAddForm />
        <TodoListItems />
    </div>
  );
}
