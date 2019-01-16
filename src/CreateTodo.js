import React from 'react';

const CreateTodo = ({ value, updateTodo }) =>
<>
<label>Enter Task: &nbsp;
<input type="text" name="task" value={value} />
</label>
<input type="submit" value="Submit" OnClick={updateTodo(value)}/>
</>

export default CreateTodo;