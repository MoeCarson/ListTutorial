import React from 'react'
import { CreateTodoContainer } from '../containers/createTodo.js'
import { TodosContainer } from '../containers/Todos.js'
import { Modal, Image } from 'react-bootstrap'


const App = () =>
    <div className="App">
        <div className="static-modal">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>My Important TODO List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Image src='/todo.jpg' alt="logo" rounded/>
                    </div>
                    <CreateTodoContainer />
                    <br></br>
                    <TodosContainer />
                </Modal.Body>
            </Modal.Dialog>
        </div>;
    </div>

export default App


