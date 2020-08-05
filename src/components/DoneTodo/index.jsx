import React from 'react'
import {Button, Card, Divider, Space} from "antd";

const DoneTodo = ({text, completed}) => (
    <Divider>
        <Space>
            <Card title={text}
                  style={{
                      textDecoration: completed ? 'line-through' : 'none', width: 500, height: 40
                  }} hoverable
                // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            </Card>
        </Space>
    </Divider>
)

export default DoneTodo;