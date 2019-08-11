import { combineReducers } from 'redux'
import todoReducer from './todoReducer'

const allReducers = combineReducers({
  todoInit: todoReducer
})

export default allReducers
