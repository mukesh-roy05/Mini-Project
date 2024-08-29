import axios from "axios";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
const url = "https://65decdeeff5e305f32a07e6e.mockapi.io/";

const Todos = () => {
  const todos = useLoaderData();
  const [newTodo, setNewTodo] = useState("");
  const [isDone, setIsDone] = useState(false);
  const navigate = useNavigate();

  const handleAddTodo = (e) => {
    e.preventDefault();

    // make an api request to create a new todo
    axios
      .post(`${url}/todos`, {
        content: newTodo,
        isDone: isDone,
      })
      .then((response) => {
        alert("Todo added successfully");

        // clear the form
        setNewTodo("");
        setIsDone(false);

        navigate("/"); // refresh the page
      })
      .catch((error) => {
        alert("Adding todo failed");
      });
  };

  const handleCheckboxChange = (todo) => {
    // make an api request to update the todo
    axios
      .put(`${url}/${todo.id}`, {
        content: todo.content,
        isDone: !todo.isDone,
      })
      .then((response) => {
        alert("Todo updated successfully");
        navigate("/"); // refresh the page
      })
      .catch((error) => {
        alert("Updating todo failed");
      });
  };

  return (
    <div>
      <h1>Todo App</h1>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos
          .sort((a, b) => a.isDone - b.isDone)
          .map((todo) => {
            return (
              <li
                key={todo.id}
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                }}
              >
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={() => handleCheckboxChange(todo)}
                />
                {todo.content}
              </li>
            );
          })}
      </ul>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Add todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <select value={isDone} onChange={(e) => setIsDone(e.target.value)}>
          <option>False</option>
          <option>True</option>
        </select>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default Todos;
