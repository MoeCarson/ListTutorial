import React, { Component } from 'react';
import logo from './todo.jpg';
import './App.css';

const List = ["Learn React", "Learn Redux", "Unlearn Lots"];

const listItems = List.map((item) =><li>{item}</li>);

const App = ({ name = "default" }) => 
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <p>
            My Important TODO List
          </p>
          <ul>{listItems}</ul>
        </header>
      </div>

export default App;


