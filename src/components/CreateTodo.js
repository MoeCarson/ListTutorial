import React from 'react';
import { Button } from 'react-bootstrap';

const CreateTodo = ({ value, onChange, onClick , disableButton }) =>
<>
<label>Enter Task: &nbsp;
<input type="text" name="task" value={value} onChange={evt => onChange(evt.target.value)}/>
</label>
<Button bsStyle="primary" disabled={disableButton} onClick={() => onClick(value)}>Submit</Button>
</>

export default CreateTodo;