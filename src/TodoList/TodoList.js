import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ list, onChange }) {
  return (
    <ul className="todo-list">
      {
        list.map((todo, i) => {
          return(
            <TodoItem
              todo={todo}
              key={i}
              index={i}
              onChange={onChange} />
          )
        })
      }
    </ul>
  )
}

TodoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired
}

export default TodoList
