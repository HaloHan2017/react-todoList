import React from 'react'
import {Button, Card, Divider, Space} from "antd";

const DoneTodo = ({content, status}) => (
    <Divider>
        <Space>
            <Card title={content}
                  style={{
                      textDecoration: status ? 'line-through' : 'none', width: 500, height: 40
                  }} hoverable
            >
            </Card>
        </Space>
    </Divider>
)

export default DoneTodo;