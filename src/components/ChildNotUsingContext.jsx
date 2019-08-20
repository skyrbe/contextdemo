import React from 'react';
import UserForm from './UserForm';

const ChildNotUsingContext = () => {
  console.log('Did I render');
  return (
    <span>Hola</span>
  )
};

export default ChildNotUsingContext;