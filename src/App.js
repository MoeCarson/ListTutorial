import React from 'react';
import logo from './todo.jpg';
import './App.css';
import TodoList from './TodoList.js';
import CreateTodo from './CreateTodo.js';

const listArray = ["Learn React", "Learn Redux", "Unlearn Lots"];

const App = () => 
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <p>
          My Important TODO List
          </p>
          <CreateTodo value="Some Task" updateTodo={TodoList(value)}/>
          <br></br>
          <TodoList list={listArray}/>
        </header>
      </div>


export default App;


