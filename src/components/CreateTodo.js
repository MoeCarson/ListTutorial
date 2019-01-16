import React from 'react';

const CreateTodo = ({ value, onClick , onChange}) =>
<>
<label>Enter Task: &nbsp;
<input type="text" name="task" value={value} onChange={evt => onChange(evt.target.value)}/>
</label>
<input type="submit" value="Submit" onClick={onClick}/>
</>

export default CreateTodo;