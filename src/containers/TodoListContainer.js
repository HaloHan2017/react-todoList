import TodoList from '../components/TodoList'
import {connect} from 'react-redux'
import {generaterDeleteClickAction, generaterToggleTodoAction, getAllTodoListFromUrlAction} from '../actions'
import {updateTodo} from "../API";

const mapStateToProps = (state) => ({
    todos: state.todoReducer
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: todo => {
        todo.status = !todo.status
        updateTodo(todo.id, todo)
        dispatch(generaterToggleTodoAction(todo))
    },
    deleteClick: id => dispatch(generaterDeleteClickAction(id)),
    addTodosFromUrl: (todos) => dispatch(getAllTodoListFromUrlAction(todos))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);