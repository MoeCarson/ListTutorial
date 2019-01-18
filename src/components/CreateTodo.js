import React from 'react';

const CreateTodo = ({ value, onChange, onClick , disableButton }) =>
<>
<label>Enter Task: &nbsp;
<input type="text" name="task" value={value} onChange={evt => onChange(evt.target.value)}/>
</label>
<input type="submit" value="Submit" disabled={disableButton} onClick={() => onClick(value)}/>
</>

export default CreateTodo;