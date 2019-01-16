import React from 'react';

const TodoList = ({ list }) => <ul>{list.map((item) => <li>{item}</li>)}</ul>

export default TodoList;