import React from 'react';

const ColorItem = ({ color, value }) => {
  return (
    <span
      style={{
        display: 'inline-block',
        border: '1px solid black',
        height: '1.5rem',
        width: '1.5rem',
        margin: '0 .2rem',
        background: value,
      }}
      className="rounded-circle"
      title={color}
    ></span>
  );
};

export default ColorItem;
