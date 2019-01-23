import React from 'react'
import { ListGroup, ListGroupItem, Well, Checkbox} from 'react-bootstrap'

const Todos = ({ todos, onChangeCheckBox, showDone, onChangeShowDone }) =>
<>
<br></br>
<Well>
    <Checkbox type="checkbox" name="showDone" id="showDoneUnique" value="test" checked={showDone} onChange={evt => onChangeShowDone( evt.target.checked )}>Show Done Todos</Checkbox>
</Well>
<br></br>
<ListGroup >
    {todos.map(item => (
        <ListGroupItem key={item.name}><Checkbox type="checkbox" name={item.name} value="test" checked={item.done} onChange={evt => onChangeCheckBox({ checked: evt.target.checked, name: item.name })}>{item.name}</Checkbox>
        </ListGroupItem>

    ))}
</ListGroup>
</>

export default Todos