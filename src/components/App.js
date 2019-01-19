import React from 'react'
import { CreateTodoContainer } from '../containers/createTodo.js'
import { TodosContainer } from '../containers/Todos.js'
import { Modal, Image } from 'react-bootstrap'
import { hot } from 'react-hot-loader'

const App = () =>
    <div className="App">
        <div className="static-modal" style={{textAlign:'center'}}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>My Important TODO List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src='/todo.jpg' alt="logo" width={150} height={150} rounded/>
                    <div style={{textAlign:'left'}}>
                        <CreateTodoContainer />
                        <br></br>
                        <TodosContainer />
                    </div>
                </Modal.Body>
            </Modal.Dialog>
        </div>;
    </div>

export default hot(module)(App)


