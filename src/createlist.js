import React from 'react';

const createList = ({ list }) => <ul>{list.map((item) => <li>{item}</li>)}</ul>

export default createList;