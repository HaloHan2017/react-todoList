import {ADD_TODO, DELETE_TODO, GET_ALL_TODO_LIST_FROM_URL, TOGGLE_TODO} from '../reducers/constants'

let uuid = 0
const generaterAddToDoAction = (todoText) => ({
    type: ADD_TODO,
    id: uuid++,
    value: todoText
})

const generaterToggleTodoAction = id => ({
    type: TOGGLE_TODO,
    id
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