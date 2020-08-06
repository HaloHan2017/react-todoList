import {ADD_TODO, DELETE_TODO, GET_ALL_TODO_LIST_FROM_URL, TOGGLE_TODO} from './constants'
import {deleteTodo} from "../API";

const todoReducer = (state = [], action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case ADD_TODO:
            return [action.todo, ...newState]
        case TOGGLE_TODO:
            newState = newState.map(todo => (todo.id === action.todo.id) ? {
                ...todo,
                status: !todo.status
            } : todo)
            return newState
        case DELETE_TODO:
            newState = newState.filter(todo => todo.id !== action.id);
            deleteTodo(action.id)
            return newState
        case GET_ALL_TODO_LIST_FROM_URL:
            return action.todos
        default:
            return state
    }
}

export default todoReducer