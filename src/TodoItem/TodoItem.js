import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Context from '../Context';

function TodoItem({todo, index, onChange}) {
  const classes = []

  const { removeTodo } = useContext(Context)

  if (todo.complete) {
    classes.push('done')
  }
  return (
    <li className="todo-item">
      <div className="item-wrapper">
        <input
          type="checkbox"
          checked={todo.complete}
          className="todo-checkbox"
          value={todo.complete}
          onChange={() => onChange(todo.id)} />
        <div className={`todo-text ${classes.join(' ')}`}>
          <strong>{index +1} </strong>
          {todo.text}
        </div>
      </div>
      <button
        className="todo-delete"
        onClick={() => removeTodo(todo.id)}>x</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TodoItem
