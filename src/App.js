import React, { Component } from 'react';
import logo from './todo.jpg';
import './App.css';

const listArray = ["Learn React", "Learn Redux", "Unlearn Lots"];

const TODOList = ({ list }) => list.map((item) => <li>{item}</li>)

const App = ({}) => 
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <p>
            My Important TODO List
          </p>
          <TODOList list={listArray}/>
        </header>
      </div>

export default App;
