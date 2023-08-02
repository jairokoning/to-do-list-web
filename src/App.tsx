import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="container">
      <div className="heading">
        <img className="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg" />
        <h1 className="heading__title">To-Do List</h1>
      </div>
      <form className="form">
        <div>
          <label className="form__label" htmlFor="todo">~ Today I need to ~</label>
          <input className="form__input"
            type="text" 
            id="todo" 
            name="to-do"
            size={30}
            autoComplete="off"
            required
          />
          <button className="button"><span>Submit</span></button>
        </div>
      </form>
      <div>
        <ul className="toDoList">
        </ul>
      </div>
    </section>
  )
}

export default App
