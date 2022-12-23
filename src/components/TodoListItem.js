import React from "react";

export default function TodoListItem(props) {
  return (
    <div className="TodoListItem">
      <li>
        <input type="checkbox" checked={props.done} onChange={props.handleClick}/>
        {props.content}
        <button onClick={props.handleDelete}>Delete</button>
      </li>
    </div>
  );
}
