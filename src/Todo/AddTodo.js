import React, { useState } from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)
  return {
    data: {
      value,
      onChange: e => setValue(e.target.value)
    },
    value: () => value,
    clear: () => setValue('')
  }
}

function AddTodo({ onCreate }) {
  const input = useInputValue('')

  function submitHandler(e) {
    e.preventDefault()
    if (input.value().trim()) {
      onCreate(input.value())
      input.clear()
    }
  }
  return (
    <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
      <input {...input.data} />
      <button type="submit">Add todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo