import React from 'react';
import logo from './todo.jpg';
import { CreateTodoContainer } from '../containers/createTodo.js';
import { TodosContainer } from '../containers/Todos.js';
import { PageHeader } from 'react-bootstrap';


const App = () => 
      <div className="App">
        <header className="App-header" class="col-md-2 col-centered text-center">
          <img src={logo} alt="logo" />
          <PageHeader>
          My Important TODO List
          </PageHeader>
          <CreateTodoContainer />
          <br></br>
          <TodosContainer />
        </header>
      </div>


export default App;


