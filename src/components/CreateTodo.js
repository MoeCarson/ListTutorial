import React from 'react'
import { Button, FormGroup, FormControl } from 'react-bootstrap'

const CreateTodo = ({ value, onChange, onClick , disableButton }) =>
<>
<FormGroup controlId="formControlsTextarea">
    <FormControl componentClass="textarea" placeholder="Enter Task Here" value={value} onChange={evt => onChange(evt.target.value)}/>
</FormGroup>
<Button bsStyle="primary" disabled={disableButton} onClick={() => onClick(value)}>Submit</Button>
</>

export default CreateTodo