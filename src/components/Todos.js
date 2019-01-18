import React from 'react';
import { ListGroup, ListGroupItem, Well, Label, Checkbox} from 'react-bootstrap';

const Todos = ({ todos, onChangeCheckBox, showDone, onChangeShowDone }) => 
<>
<br></br>
<Well>
<Checkbox name="showDone" value="test" checked={showDone} onChange={evt => onChangeShowDone( evt.target.checked )}></Checkbox>
&nbsp; <Label bsStyle="primary">Show Completed Todos</Label>
</Well><br></br>
<ListGroup >
{todos.map(item => (
<ListGroupItem key={item.name}><Checkbox type="checkbox" name={item.name} value="test" checked={item.done} onChange={evt => onChangeCheckBox({ checked: evt.target.checked, name: item.name })}></Checkbox>
{item.name}

</ListGroupItem>

))}
</ListGroup>
</>

export default Todos;