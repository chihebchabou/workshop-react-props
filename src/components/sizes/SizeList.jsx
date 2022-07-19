import React from 'react';
import SizeItem from './SizeItem';

const SizeList = ({ sizes }) => {
  return sizes.map((size, i) => <SizeItem size={size} key={i} />);
};

export default SizeList;
