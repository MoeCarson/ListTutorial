import React from 'react';

const TodoList = ({ value, onClick }) =>
<>
<label>Enter Task: &nbsp;
<input type="text" name="task" value={value} />
</label>
<input type="submit" value="Submit" onClick={onClick}/>
</>

export default TodoList;