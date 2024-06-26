import React from "react";
import "./App.css";
import { api } from "./api";

function App() {
  const [items, setItems] = React.useState([]);
  const [value, setValue] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    api.createItem(value).then((persistedItem) => {
      setItems([...items, value]);
      setValue("");
    });
  }

  return (
    <div>
      <h1>TO DO</h1>
      <TodoList items={items} />
      <form onSubmit={handleSubmit}>
        <label id="add-todo" htmlFor="new-todo">
         Add Todo: {" "}
        </label>
        <input
          id="new-todo"
          value={value}
          placeholder="Add Todo..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button id="add-button">Add #{items.length + 1}</button>
      </form>
    </div>
  );
}

function TodoList(props) {
  return (
    <ul>
      {props.items.map((item, i) => (
        <li id="list" key={i}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default App;
