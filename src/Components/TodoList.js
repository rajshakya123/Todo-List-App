import React from 'react';
import { List, Checkbox, Button, Input, Form, Row, Col, Typography, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, } from '../store/actions/todoList';
import { isDuplicateTodo } from '../utils/validations';
import styles from './TodoList.module.css'

const { Title } = Typography;

const mapStateToProps = (state) => ({
  todos: state.todos.todos
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo
};


const TodoList = (props) => {
  const { todos, addTodo, toggleTodo, deleteTodo } = props;
  const [form] = Form.useForm();

  const handleAddTodo = (values) => {
    if (isDuplicateTodo(todos, values.newTodo)) {
      message.error('Duplicate to-do item. Please enter a unique to-do.');
      return;
    }

    addTodo(values.newTodo);
    form.resetFields();
  };

  return (
    <div className={styles.todoListContainer}>
      <Title level={2}  className={styles.todoListTitle}>To-Do List</Title>
      <List
        bordered
        dataSource={todos}
        renderItem={item => (
          <List.Item className={styles.todoListItem}
            actions={[
              <Checkbox checked={item.completed} onChange={() => toggleTodo(item.id)}>{item.completed ? 'Completed' : 'Uncompleted'}</Checkbox>,
              <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => deleteTodo(item.id)} />
            ]}
          >
            {item.title}
          </List.Item>
        )}
      />
      <Form form={form} onFinish={handleAddTodo} className={styles.addTodoForm}>
        <Row gutter={16} className={styles.padding}>
          <Col span={16}>
            <Form.Item
              name="newTodo"
              rules={[{ required: true, message: 'Please enter a to-do item' }]}
            >
              <Input placeholder="Add a new to-do item" className={styles.addTodoInput} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Button type="primary" htmlType="submit" className={styles.addTodoButton}>Add To-Do</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
