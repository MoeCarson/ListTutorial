import React from 'react';

const CreateTodo = ({ value, onChange}) =>
<>
<label>Enter Task: &nbsp;
<input type="text" name="task" value={value} onChange={evt => onChange(evt.target.value)}/>
</label>
</>

export default CreateTodo;