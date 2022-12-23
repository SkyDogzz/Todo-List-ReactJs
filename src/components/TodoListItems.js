import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoListItems(props) {
  const items = props.items.map((item) => (
    <TodoListItem key={item.id} content={item.content} done={item.done} />
  ));
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
}
