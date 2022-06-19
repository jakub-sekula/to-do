import Sidebar from "./Sidebar.js";
import Button from "./Button";
import Container from "./Container";
import Input from "./Input";
import ToDoItem from "./ToDoItem.js";
import { useState } from "react";

function App() {
  const [listItems, setListItems] = useState([]);
  const [input, setInput] = useState("");

  const addToList = () => {
    let newListItems = [...listItems];

    if (newListItems.includes(input)) return;
    if (input === "") return;

    newListItems.push(input);
    setListItems(newListItems);
    setInput("");
  };

  const removeFromList = (key) => {
    let newListItems = listItems.filter((item) => item !== key);
    setListItems(newListItems);
  };

  return (
    <Container className="flex">
      <Sidebar />
      <Container className="w-screen h-screen flex flex-col gap-4 ml-16 p-4 px-48 justify-start items-start">
        <Container className="flex gap-4">
        </Container>
        <span className="font-semibold text-2xl">Todo list</span>
        <span className="text-xl">
          {/* Current count is: <span className="font-bold">{count}</span><br></br> */}
          Number of tasks: <span className="font-bold">{listItems.length}</span>
        </span>
        <Input
          className="border-2 border-slate-200 p-4 w-full rounded-md"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
                addToList(e)
            }}}
        />
        <Button
          className="button green self-end"
          text="Add to list"
          onClick={(event) => {
            addToList(event);
          }}
        />
        <Container className="flex gap-4 flex-col w-full">
          {listItems.map((item) => {
            return (
              <ToDoItem text={item} id={item} removeButton={removeFromList} />
            );
          })}
        </Container>
      </Container>
    </Container>
  );
}

export default App;
