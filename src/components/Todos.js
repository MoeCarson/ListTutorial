import React from 'react';

const Todos = ({ todos, onClick }) => 
<>
<input type="submit" value="Submit" onClick={onClick}/>
{todos.map(item => (
<li key={item}>{item}</li>))}
</>

export default Todos;