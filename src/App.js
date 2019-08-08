import React, { useState } from 'react'
import TodoList from './Todo/TodoList'
import AddTodo from './Todo/AddTodo'
import Context from './context'

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Пожрать' },
    { id: 2, completed: false, title: 'Поспать' },
    { id: 3, completed: false, title: 'Погулять' },
    { id: 4, completed: false, title: 'Поработать' }
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos([...todos, { id: Date.now(), completed: false, title }])
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>There is no todos!</p>
        )}
      </div>
    </Context.Provider>
  )
}

export default App
