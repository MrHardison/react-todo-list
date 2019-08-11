import * as types from '../ActionTypes/actionTypes'

const initialState = {
  todos: localStorage.getItem('todos') || []
}

export default function todos(state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_TODO:
      let data = {
        ...state,
        todos: [...state.todos, ...payload]
      }
      localStorage.setItem('todos', JSON.stringify(data))
      return {
        ...state,
        todos: data.todos
      }
    case types.DELETE_TODO:
      data = {
        ...state,
        todos: [...state.todos].filter(todo => todo.id !== payload)
      }
      localStorage.setItem('todos', JSON.stringify(data))
      return {
        ...state,
        todos: [...data.todos]
      }
    default:
      return state
  }
}
