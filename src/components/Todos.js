import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

const Todos = ({ todos, onChangeCheckBox, showDone, onChangeShowDone }) => 
<>
<td>
<input type="checkbox" name="showDone" value="test" checked={showDone} onChange={evt => onChangeShowDone( evt.target.checked )}></input>
&nbsp; Show Completed Todos</td>
<ListGroup>

{todos.map(item => (

<li key={item.name}>{item.name}
&nbsp; &nbsp; 
<input type="checkbox" name={item.name} value="test" checked={item.done} onChange={evt => onChangeCheckBox({ checked: evt.target.checked, name: item.name })}></input></li>
))}</ListGroup>
</>

export default Todos;