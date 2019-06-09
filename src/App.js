import React, { useEffect } from 'react'
import './main.css'
import TodoList from './TodoList/TodoList.js'
import AddTodo from './AddTodo/AddTodo.js'
import Context from './Context'

function App() {
  const [list, setList] = React.useState([
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true
    },
    {
      userId: 1,
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false
    }
  ])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')
  //     .then(response => response.json())
  //     .then(list => setList(list))
  // })

  function toggleItem(id) {
    setList(
      list.map(item => {
        if (id === item.id) {
          item.completed = !item.completed
        }
        return item
      })
    )
  }

  function removeTodo(id) {
    setList(list.filter(item => item.id !== id))
  }
  function addItem(title) {
    setList(
      list.concat([
        {
          id: Date.now(),
          title,
          completed: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>My first React app</h1>
        <AddTodo onCreate={addItem} />
        {list.length ? (
          <TodoList list={list} onChange={toggleItem} />
        ) : (
          <div>No Items!</div>
        )}
      </div>
    </Context.Provider>
  )
}

export default App
