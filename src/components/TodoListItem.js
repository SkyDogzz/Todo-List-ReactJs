import React from "react";

export default function TodoListItem(props) {
  return (
    <div className="TodoListItem">
      <li>
        <input type="checkbox" />
        {props.content}
      </li>
    </div>
  );
}
