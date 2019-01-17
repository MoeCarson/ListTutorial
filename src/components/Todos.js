import React from 'react';

const Todos = ({ todos, onChangeCheckBox, showDone, onChangeShowDone }) => 
<>
<td>
<input type="checkbox" name="showDone" value="test" checked={showDone} onChange={evt => onChangeShowDone( evt.target.checked )}></input>
&nbsp; Show Completed Todos</td>
{todos.map(item => (
<li key={item.name}>{item.name}
&nbsp; &nbsp; 
<input type="checkbox" name={item.name} value="test" checked={item.done} onChange={evt => onChangeCheckBox({ checked: evt.target.checked, name: item.name })}></input></li>
))}
</>

export default Todos;