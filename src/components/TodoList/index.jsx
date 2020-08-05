import TODO from '../Todo'
import React from 'react'
import {todoList} from "../../API";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        todoList().then(response => {
            this.props.addTodosFromUrl(response.data)
        })
    }

    render() {
        return (
            <ul>
                {this.props.todos.map((todo) =>
                    <TODO key={todo.id}
                          {...todo}
                          onClick={() => this.props.toggleTodo(todo.id)}
                          deleteClick={() => this.props.deleteClick(todo.id)}
                    />
                )}
            </ul>
        )
    }
}

export default TodoList