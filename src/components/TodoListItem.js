import React from "react";

export default function TodoListItem(props) {
  return (
    <div className="TodoListItem">
      <li>
        <input type="checkbox" checked={props.done} onChange={props.handleClick}/>
        {props.content}
      </li>
    </div>
  );
}
