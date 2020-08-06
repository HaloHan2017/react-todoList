import {connect} from 'react-redux'

import DoneTodoList from '../components/DoneToDoList'

const mapStateToProps = state => {
    return {todos: state.todoReducer.filter(t => t.status)}
}

export default connect(
    mapStateToProps
)(DoneTodoList)