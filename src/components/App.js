import React from 'react';
import logo from './todo.jpg';
import { CreateTodoContainer } from '../containers/createTodo.js';
import { TodosContainer } from '../containers/Todos.js';


const App = () => 
      <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
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


