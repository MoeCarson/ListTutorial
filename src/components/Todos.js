import React from 'react';
import { ListGroup, ListGroupItem, Well, Label} from 'react-bootstrap';

const Todos = ({ todos, onChangeCheckBox, showDone, onChangeShowDone }) => 
<>
<br></br>
<Well>
<input type="checkbox" name="showDone" value="test" checked={showDone} onChange={evt => onChangeShowDone( evt.target.checked )}></input>
&nbsp; <Label bsStyle="primary">Show Completed Todos</Label>
</Well><br></br>
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