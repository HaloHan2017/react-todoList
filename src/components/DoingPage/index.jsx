import React from 'react'
import TodoFromContainer from '../../containers/TodoFromContainer'
import TodoListContainer from '../../containers/TodoListContainer'

class DoingPage extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <TodoListContainer/>
                <TodoFromContainer/>
            </div>

        )
    }
}

export default DoingPage