import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoListItems(props) {
  const items = props.items.map((item) => (
    <TodoListItem
      key={item.id}
      content={item.content}
      done={item.done}
      handleClick={() => props.handleClick(item.id)}
      handleDelete={() => props.handleDelete(item.id)}
    />
  ));
  return (
    <div className="TodoListItems">
      <ul>{items}</ul>
    </div>
  );
}
