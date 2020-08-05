import TODO from '../DoneTodo'
import React from 'react'
import {Empty} from "antd";

class DoneTodoList extends React.Component {
    render() {
        if(this.props.todos.length === 0){
            return (<Empty/>)
        }
        return (
            <div className="site-card-border-less-wrapper">
                {
                    this.props.todos.map((todo) =>
                        <TODO key={todo.id}
                              {...todo}
                        />
                    )}
            </div>
        )
    }
}

export default DoneTodoList