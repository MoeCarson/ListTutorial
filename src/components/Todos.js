import React from 'react';

const Todos = ({ todo, onClick }) => 
<>
<input type="submit" value="Submit" onClick={onClick}/>
<ul><li>{todo}</li></ul>
</>

export default Todos;