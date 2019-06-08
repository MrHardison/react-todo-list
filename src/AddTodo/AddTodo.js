import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function AddTodo({ onCreate }) {
  const [value, setValue] = useState('')

  function submithandler(e) {
    e.preventDefault()
    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }
  return (
    <form className="add-todo" onSubmit={submithandler}>
      <input
        type="text"
        className="add-todo-input"
        value={ value }
        onChange={e => setValue(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo