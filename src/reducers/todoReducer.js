import {ADD_TODO, DELETE_TODO, GET_ALL_TODO_LIST_FROM_URL, TOGGLE_TODO} from './constants'
import {deleteTodo} from "../API";

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [action.todo, ...state]
        case TOGGLE_TODO:
            // state = state.map(todo => (todo.id === action.todo.id) ? {
            //     ...todo,
            //     status: todo.status
            // } : todo)
            return state
        case DELETE_TODO:
            state = state.filter(todo => todo.id !== action.id);
            deleteTodo(action.id)
            return state
        case GET_ALL_TODO_LIST_FROM_URL:
            return action.todos
        default:
            return state
    }
}

export default todoReducer