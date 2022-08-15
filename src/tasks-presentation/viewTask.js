import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function TasksList({ allTasks, handleDelete }) {
  return (
    <ul>
      {allTasks.map(({ title, description, id }) => (
        <li key={id}>
          <div>
            <h2>Title: {title}</h2>
            <button onClick={() => handleDelete(id)}>X</button>
          </div>
          Description: {!description ? null : <p>{description}</p>}
        </li>
      ))}
    </ul>
  );
}

// const sample = (event) => {
//   const { name, names } = event.target;
// }
