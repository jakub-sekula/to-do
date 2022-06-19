import { useState } from "react";

const Todo = (props) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(props.name);

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setEditing(false);
  }

  const editingTemplate = (
    <form className="w-full" onSubmit={handleSubmit}>
      <div>
        <input
          id={props.id}
          className="w-full h-12 bg-white border-[1px] shadow-inner border-blue-400 rounded-md mb-2 p-2"
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-4 justify-end items-center">
      <label className="visually-hidden" htmlFor={props.id}>
          Editing task {props.name}
        </label>
        <button
          type="button"
          className="button gray"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="button green animate-pulse duration-75">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div>
      <div className="w-full min-h-fit bg-blue-50 rounded-md mb-2 p-2 flex items-center gap-4">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          className='w-8 h-8 rounded-md self-start'
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="w-full whitespace-pre-line" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="flex gap-4 justify-end">
        <button type="button" className="button gray" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="button red"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return (
    <li className="">{isEditing ? editingTemplate : viewTemplate}</li>
  );
};

export default Todo;
