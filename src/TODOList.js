import React from 'react';

const TodoList = ({ list }) => list.map((item) => <li>{item}</li>)

export default TodoList;