import React from 'react'
import TodoFromContainer from '../../containers/TodoFromContainer'
import TodoListContainer from '../../containers/TodoListContainer'

class DoingPage extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <TodoFromContainer/>
                <TodoListContainer/>
            </div>
        )
    }
}

export default DoingPage