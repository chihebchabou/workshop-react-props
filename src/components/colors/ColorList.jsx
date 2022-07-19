import React from 'react';
import ColorItem from './ColorItem';

const ColorList = ({ colors }) => {
  console.log(Object.entries(colors));
  return Object.entries(colors).map(([color, value], i) => (
    <ColorItem color={color} value={value} key={i} />
  ));
};

export default ColorList;
