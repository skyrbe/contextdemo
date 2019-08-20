import React from 'react';
import UserForm from './UserForm';

const Child = (props) => {
  return (
  <UserForm {...props}/>
  )
};

export default Child;