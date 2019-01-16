import React from 'react';

const CreateTodo = ({ list }) => <ul>{list.map((item) => <li>{item}</li>)}</ul>

export default CreateTodo;