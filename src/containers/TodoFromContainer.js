import TodoForm from '../components/TodoForm'
import {connect} from 'react-redux'
import {generaterAddToDoAction} from '../actions/index'
import {addTodo} from "../API";

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todoText) => {
        addTodo({content: todoText}).then(response => {
            dispatch(generaterAddToDoAction(response.data))
        })
    }
})

export default connect(null, mapDispatchToProps)(TodoForm)