import React from "react";

export default function TodoListAddForm(props) {
  return (
    <div className="TodoListAddForm">
      <form onSubmit={props.handleAdd}>
        <input type="text" />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
