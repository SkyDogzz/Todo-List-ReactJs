import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoListItems() {
  return (
    <div>
      <ul>
        <TodoListItem content="Learn ReactJS"/>
        <TodoListItem content="Learn NodeJS"/>
      </ul>
    </div>
  );
}
