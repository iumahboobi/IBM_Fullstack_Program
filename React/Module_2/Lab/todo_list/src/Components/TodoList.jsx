import { useState } from 'react'
import './TodoList.css'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [headingInput, setHeadingInput] = useState('')
  const [listInputs, setListInputs] = useState({})

  const handleAddToDo = () => {
    if (headingInput !== '') {
      setTodos([...todos, { heading: headingInput, list: [] }])
      setHeadingInput('')

      console.log(todos)
    } else {
      alert('heading input is empty')
    }
  }

  const handleRemoveItem = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index)
    setTodos(updatedTodos)
  }

  const handleListInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value })
  }

  const handleAddList = (index) => {
    if (listInputs[index] && listInputs[index].trim() !== '') {
      const newTodos = [...todos]
      newTodos[index].list.push(listInputs[index])
      setTodos(newTodos)
      setListInputs({ ...listInputs, [index]: '' })
    }
  }

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => setHeadingInput(e.target.value)}
          />
          <button className="add-list-button" onClick={handleAddToDo}>
            Add Heading
          </button>
        </div>
      </div>
      <div className="todo_main">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            <div className="heading_todo">
              <h3>{todo.heading}</h3>
              <button
                className="delete-button-heading"
                onClick={() => handleRemoveItem(index)}
              >
                Delete Heading
              </button>
            </div>
            <ul>
              {todo.list.map((todo, listIndex) => (
                <li key={listIndex} className="todo_inside_list">
                  {todo}
                </li>
              ))}
            </ul>
            <div className='add_list'>
              <input
                className="list-input"
                value={listInputs[index] || ''}
                onChange={(e) => handleListInputChange(index, e.target.value)}
              />
              <button
                className="add-list-button"
                onClick={() => handleAddList(index)}
              >
                Add List
              </button>
            </div>

            
          </div>
        ))}
      </div>
    </>
  )
}

export default TodoList
