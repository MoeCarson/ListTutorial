import React from 'react';
import logo from './todo.jpg';
import './App.css';
import createList from './createlist.js';
import createTask from './createtask.js';

const listArray = ["Learn React", "Learn Redux", "Unlearn Lots"];

const App = () => 
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <p>
          My Important TODO List
          </p>
          <createTask value="Some Task"/>
          <br></br>
          <createList list={listArray}/>
        </header>
      </div>


export default App;


