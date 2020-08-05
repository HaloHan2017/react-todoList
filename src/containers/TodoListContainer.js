import TodoList from '../components/TodoList'
import {connect} from 'react-redux'
import {generaterDeleteClickAction, generaterToggleTodoAction, getAllTodoListFromUrlAction} from '../actions'

const mapStateToProps = (state) => ({
    todos: state.todoReducer.todoTextList
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(generaterToggleTodoAction(id)),
    deleteClick: id => dispatch(generaterDeleteClickAction(id)),
    addTodosFromUrl: (todos) => dispatch(getAllTodoListFromUrlAction(todos))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);