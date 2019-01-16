import React from 'react';

const TODOList = ({ list }) => list.map((item) => <li>{item}</li>)

export default TODOList;