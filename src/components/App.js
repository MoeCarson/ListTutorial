import React from 'react';
import logo from './todo.jpg';
import './App.css';
import { CreateTodoContainer } from '../containers/createTodo.js';
import { TodosContainer } from '../containers/Todos.js';


const App = () => 
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <p>
          My Important TODO List
          </p>
          <CreateTodoContainer />
          <br></br>
          <TodosContainer />
        </header>
      </div>


export default App;


