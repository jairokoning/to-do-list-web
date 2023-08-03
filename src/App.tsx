import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid';
import notepadIcon from './assets/Icon-notepad.svg.png';
import './App.css'

interface ToDoList {
  id: string;
  todo: string;
}

function App() {
  const [toDoList, setToDoList] = useState<ToDoList[]>([])
  const [newToDo, setNewToDo] = useState("");

  const handleAddNewToDo = (event: FormEvent) => {
    event.preventDefault();
    setToDoList([...toDoList, {
      id: uuid(),
      todo: newToDo
    }]);
    setNewToDo("");
  }

  const handleNewToDoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewToDo(event.target.value)
  }

  return (
    <section className="container">
      <div className="heading">
        {/* <img className="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg" /> */}
        <img className="heading__img" src={notepadIcon} />
        <h1 className="heading__title">To-Do List</h1>
      </div>
      <form onSubmit={handleAddNewToDo} className="form">
        <div>
          <label className="form__label" htmlFor="todo">📅 Today I need to ✅</label>
          <input className="form__input"
            type="text" 
            id="todo" 
            name="to-do"
            size={30}
            autoComplete="off"
            value={newToDo}
            onChange={handleNewToDoChange}
            required
          />
          <button className="button"><span>Submit</span></button>
        </div>
      </form>
      <div>
        <ul className="toDoList">
          {toDoList.map((item: ToDoList) => {
            return <li key={item.id} >{item.todo}</li>
          })}
        </ul>
      </div>
    </section>
  )
}

export default App
