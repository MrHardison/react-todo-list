import * as types from '../ActionTypes/actionTypes'

export const addTodo = todo => ({
  type: types.ADD_TODO,
  payload: todo
})
export const removeTodo = id => ({
  type: types.DELETE_TODO,
  payload: id
})

