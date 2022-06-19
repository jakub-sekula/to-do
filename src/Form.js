import { useState } from "react"


const Form = (props) => {

    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTask(name)
        setName('')
      }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className="text-slate-800">
            <label htmlFor="new-todo-input" className="text-sm">
              Enter your task name:
            </label>
          </h2>
          <div className="flex">
          <input
            type="text"
            id="new-todo-input"
            className="w-full mr-4 px-2 rounded-md border-[1px] border-slate-300"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
          />
          <button type="submit" className="button green min-w-fit">
            Add task
          </button>
          </div>
        </form>
      );
}

export default Form;