import {ADD_TODO, DELETE_TODO, GET_ALL_TODO_LIST_FROM_URL, TOGGLE_TODO} from '../reducers/constants'

const generaterAddToDoAction = (todo) => ({
    type: ADD_TODO,
    todo
})

const generaterToggleTodoAction = todo => ({
    type: TOGGLE_TODO,
    todo
})

const generaterDeleteClickAction = id => ({
    type: DELETE_TODO,
    id
})

const getAllTodoListFromUrlAction = todos => ({
    type: GET_ALL_TODO_LIST_FROM_URL,
    todos
})

export {
    generaterAddToDoAction,
    generaterToggleTodoAction,
    generaterDeleteClickAction,
    getAllTodoListFromUrlAction
}