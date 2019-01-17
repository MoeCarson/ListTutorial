import React from 'react';

const Todos = ({ todos, onClick }) => 
<>
<input type="submit" value="Submit" onClick={onClick}/>
{todos.map(item => (
<li key={item.name}>{item.name}</li>))}
</>

export default Todos;