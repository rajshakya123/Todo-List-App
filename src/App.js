import React from 'react';
import './App.css';
import { Layout } from 'antd';
import TodoList from './Components/TodoList';

const { Header, Content } = Layout;

const App = () => (
  <Layout>
    <Header>
      <div style={{ color: 'white', fontSize: '20px' }}>To-Do List Application</div>
    </Header>
    <Content style={{ padding: '20px 50px' }}>
      <TodoList />
    </Content>
  </Layout>
);

export default App;
