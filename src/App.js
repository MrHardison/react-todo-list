import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from './Actions/todoActions'
import TodoList from './Todo/TodoList'
import Context from './Context'
import Loader from './Loader'

const AddTodo = React.lazy(() => import('./Todo/AddTodo'))

// Ducks, api, url, handbook duck

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 1000)
      })
  }, [])
  function toggleTodo(id) {
    setTodos(
      todos.map(({ completed, ...rest }) => ({
        ...rest,
        completed: id === rest.id ? !completed : completed
      }))
    )
  }

  // function removeTodo(id) {
  //   setTodos(todos.filter(todo => todo.id !== id))
  // }

  // function addTodo(title) {
  //   setTodos([...todos, { id: Date.now(), completed: false, title }])
  // }

  function MatchDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        add: addTodo,
        delete: removeTodo
      },
      dispatch
    )
  }

  connect(
    null,
    MatchDispatchToProps
  )(addTodo)

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>

        <React.Suspense fallback={<p>Loading....</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}

        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>There is no todos!</p>
        )}
      </div>
    </Context.Provider>
  )
}

export default App
