import React from 'react';

const Todos = ({ todos}) => 
<>
{todos.map(item => (
<li key={item.name}>{item.name}</li>))}
</>

export default Todos;