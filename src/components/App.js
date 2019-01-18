import React from 'react';
import logo from './todo.jpg';
import { CreateTodoContainer } from '../containers/createTodo.js';
import { TodosContainer } from '../containers/Todos.js';
import { Modal, Image } from 'react-bootstrap';

const App = () => 
      <div className="App">
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>My Important TODO List</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <div align="center">
              <Image src={logo} alt="logo" rounded/>
              </div>
              <CreateTodoContainer />
              <br></br>
                <TodosContainer />
            </Modal.Body>
          </Modal.Dialog>
      </div>;
      </div>

export default App;


