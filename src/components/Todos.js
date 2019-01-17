import React from 'react';

const Todos = ({ todos, onChangeCheckBox }) => 
<>
{todos.map(item => (
<li key={item.name}>{item.name}
&nbsp; &nbsp; 
<input type="checkbox" name="test" value="test" checked={item.done} onChange={evt => onChangeCheckBox(evt.target.checked)}></input></li>
))}
</>

export default Todos;