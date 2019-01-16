import React from 'react';

const createTask = ({ value, onClick }) =>
<>
<label>Enter Task: &nbsp;
<input type="text" name="task" value={value} />
</label>
<input type="submit" value="Submit" onClick={onClick}/>
</>

export default createTask;