import {ADD_TODO, DELETE_TODO, GET_ALL_TODO_LIST_FROM_URL, TOGGLE_TODO} from './constants'

const defaultState = {
    todoTextList: []
}

const todoReducer = (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case ADD_TODO:
            let todo = {
                id: action.id,
                text: action.value,
                completed: false
            }
            newState.todoTextList.push(todo)
            return newState
        case TOGGLE_TODO:
            newState.todoTextList = newState.todoTextList.map(todo => (todo.id === action.id) ? {
                ...todo,
                completed: !todo.completed
            } : todo)
            return newState
        case DELETE_TODO:
            newState.todoTextList = newState.todoTextList.filter(todo => todo.id !== action.id);
            return newState
        case GET_ALL_TODO_LIST_FROM_URL:
            newState.todoTextList = action.todos.map(todo => {
                return {
                    id: todo.id,
                    text: todo.content,
                    completed: todo.status
                }
            })
            return newState
        default:
            return state
    }
}

export default todoReducer