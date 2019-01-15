import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = ({ name }) => <h1> {name} </h1>

const App = ({ name = "default" }) => 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Hello name={name}/>
          </a>
        </header>
      </div>

export default App;
