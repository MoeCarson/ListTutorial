import React from 'react';

const CreateTodo = () =>
<form>
<label>Enter Task: &nbsp;
<input type="text" name="task" value="Some Task" />
</label>
<input type="submit" value="Submit"/>
</form>

export default CreateTodo;