import Todo from '../Todo'
import React from 'react'
import {todoList} from "../../API";
import {Empty} from "antd";

class TodoList extends React.Component {
    componentDidMount() {
        todoList().then(response => {
            this.props.addTodosFromUrl(response.data)
        })
    }

    render() {
        if(this.props.todos.length === 0){
            return (<Empty/>)
        }
        return (
            <div className="site-card-border-less-wrapper">
                {this.props.todos.map((todo) =>
                    <Todo key={todo.id}
                          {...todo}
                          onClick={() => this.props.toggleTodo(todo)}
                          deleteClick={() => this.props.deleteClick(todo.id)}
                    />
                )}
            </div>
        )
    }
}

export default TodoList