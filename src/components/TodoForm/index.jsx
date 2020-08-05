import React from 'react'
import {Input} from "antd";
import "antd/dist/antd.css"
import { UserOutlined,PlusCircleOutlined } from '@ant-design/icons';
import { Divider,Space } from 'antd';

class todoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.value)
        this.setState({value: ''})
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <Divider>
                <Space>
                    <Input type="text" value={this.state.value}
                           placeholder="please input" onChange={this.handleChange}  />
                    <Input type="submit" onClick={this.handleSubmit} value="Add" />
                </Space>
            </Divider>
        )
    }

}

export default todoForm