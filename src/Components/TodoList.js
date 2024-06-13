// src/components/TodoList.js
import React, { useState } from 'react';
import { List, Checkbox, Button, Input, Form, Row, Col, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;

const initialTodos = [
  { id: 1, title: 'Buy groceries', email: 'xyz@gmail.com', completed: false },
  { id: 2, title: 'Walk the dog', email: 'abc@gmail.com', completed: true },
  { id: 3, title: 'Read a book', email: 'stv@gmail.com', completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  const toggleCompletion = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const todo = { id: newId, title: newTodo, email: '', completed: false };
    setTodos([...todos, todo]);
    setNewTodo('');
  };

  return (
    <div>
      <Title level={2}>To-Do List</Title>
      <List
        bordered
        dataSource={todos}
        renderItem={item => (
          <List.Item
            actions={[
              <Checkbox checked={item.completed} onChange={() => toggleCompletion(item.id)}>Completed</Checkbox>,
              <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => deleteTodo(item.id)} />
            ]}
          >
            {item.title}
          </List.Item>
        )}
      />
      <Form onFinish={addTodo}>
        <Row gutter={16}>
          <Col span={16}>
            <Form.Item
              name="newTodo"
              rules={[{ required: true, message: 'Please enter a to-do item' }]}
            >
              <Input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new to-do item"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Button type="primary" htmlType="submit">Add To-Do</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TodoList;
