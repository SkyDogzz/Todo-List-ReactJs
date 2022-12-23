import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoListItems(props) {
  const handleClick = (event) => {
    console.log(event.target);
  };
  const items = props.items.map((item) => (
    <TodoListItem key={item.id} content={item.content} done={item.done} handleClick={handleClick}/>
  ));
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
}
