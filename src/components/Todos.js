import React from 'react'
import { ListGroup, ListGroupItem, Well, Checkbox} from 'react-bootstrap'
/// <reference types="../types.d.ts" />


/** @type { React.StatelessComponent<{ todos: { name: string, done: Boolean }[], onChangeCheckBox: ({ checked: Boolean, name: string }) => any, showDone: Boolean, onChangeShowDone: (arg: Boolean) => any }> }  */
const Todos = ({ todos, onChangeCheckBox, showDone, onChangeShowDone }) =>
<>
<br></br>
<Well>
    <Checkbox type="checkbox" name="showDone" data-show-done-todos value="test" checked={showDone} onChange={evt => onChangeShowDone( evt.target.checked )}>Show Done Todos</Checkbox>
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