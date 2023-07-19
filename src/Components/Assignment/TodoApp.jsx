import { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState([]);
  const [numberOfTask, setNumberOfTask] = useState(0);

  const handleButton = () => {
    const inputvalue = document.getElementById("input").value;

    setTask((prevTask) => [
      ...prevTask,
      { task: `${inputvalue}`, number: `${numberOfTask + 1}` },
    ]);

    setNumberOfTask(numberOfTask + 1);
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <div>
          <input type="text" id="input" />
          <button type="button" onClick={handleButton}>
            Add
          </button>
        </div>
        <ul id="task">
          {task.map((item) => {
            return <li key={item.number}>{item.task}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoApp;
