import React from 'react';
import logo from './todo.jpg';
import './App.css';
import Todos from './Todos.js';
import { CreateTodoContainer } from '../containers/createTodo.js';
import { CreateTodos } from '../containers/Todos.js';


const App = () => 
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <p>
          My Important TODO List
          </p>
          <CreateTodoContainer />
          <br></br>
          <CreateTodos />
        </header>
      </div>


export default App;


