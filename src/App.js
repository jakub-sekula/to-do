import { useState } from "react";
import Todo from "./Todo";
import Form from "./Form";
import FilterButton from "./FilterButton";
import { nanoid } from "nanoid";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("All");

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        name={task.name}
        id={task.id}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const activeTasks = tasks.filter(task => task.completed === false).length

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  }

  const tasksNoun = activeTasks !== 1 ? "tasks" : "task";

  const tasksRemaining = tasks.filter((task) => task.completed === false);

  const headingText = `You currently have ${activeTasks} ${tasksNoun} remaining`;

  function addTask(name) {
    if (name === "") return;
    console.log(tasks);
    const newTask = { id: "todo" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  return (
    <div className="w-screen min-h-screen h-full  p-12 bg-gradient-to-b from-cyan-300 to-blue-300">
      <div className="flex w-2/3 gap-4 max-w-md bg-slate-50 border-slate-200 border-[1px] rounded-md shadow-xl shadow-cyan-500/30 p-8 justify-center items-center flex-col">
        <div className="self-start">
          <h1 className="font-bold text-4xl text-slate-800 self-start mb-2">
            Your to-do list
          </h1>
          <h2 id="list-heading">{activeTasks !== 0 ? headingText : 'There are no tasks remaining. Well done!'}</h2>
        </div>
        <Form addTask={addTask} />

        <div className="flex gap-4 w-full">{filterList}</div>

        <ul
          className="w-full flex flex-col gap-4"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    </div>
  );
}

export default App;
