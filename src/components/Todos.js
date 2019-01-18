import React from 'react';
import { ListGroup, ListGroupItem, Well } from 'react-bootstrap';

const Todos = ({ todos, onChangeCheckBox, showDone, onChangeShowDone }) => 
<>
<Well>
<input type="checkbox" name="showDone" value="test" checked={showDone} onChange={evt => onChangeShowDone( evt.target.checked )}></input>
&nbsp; Show Completed Todos</Well>
<ListGroup>

{todos.map(item => (

<ListGroupItem key={item.name}>{item.name}
&nbsp; &nbsp; 
<input type="checkbox" name={item.name} value="test" checked={item.done} onChange={evt => onChangeCheckBox({ checked: evt.target.checked, name: item.name })}></input>

</ListGroupItem>
))}
</ListGroup>
</>

export default Todos;