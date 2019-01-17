import React from 'react';

const Todos = ({ todos, onChangeCheckBox }) => 
<>
{todos.map(item => (
<li key={item.name}>{item.name}
&nbsp; &nbsp; 
<input type="checkbox" name={item.name} value="test" checked={item.done} onChange={evt => onChangeCheckBox({ checked: evt.target.checked, name: item.name })}></input></li>
))}
</>

export default Todos;