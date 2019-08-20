import React from 'react';

const ChildNotUsingContext = () => {
  console.log('Did I render');
  return (
    <span>Hola</span>
  )
};

export default ChildNotUsingContext;