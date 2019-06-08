import React from 'react';
import './main.css';
import TodoList from './TodoList/TodoList.js';
import AddTodo from './AddTodo/AddTodo.js';
import Context from './Context'


function App() {
  const [list, setList] = React.useState(
    [
      {id: 1, text: 'todo item 1', complete: false},
      {id: 2, text: 'todo item 2', complete: false},
      {id: 3, text: 'todo item 3', complete: false}
    ]
  )

  function toggleItem(id) {
    setList(
      list.map(item => {
        if (id === item.id) {
          item.complete = !item.complete
        }
        return item
      })
    )
  }

  function removeTodo(id) {
    setList(
      list.filter(item => item.id !== id)
    )
  }
  function addItem(text) {
    setList(
      list.concat([{
        id: 777,
        text,
        complete: false
      }])
    )
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>My first React app</h1>
        <AddTodo onCreate={ addItem } />
        {
          list.length ?
          <TodoList
            list={list}
            onChange={toggleItem} /> :
          <div>No Items!</div>
        }
      </div>
    </Context.Provider>
  )
}

export default App;
