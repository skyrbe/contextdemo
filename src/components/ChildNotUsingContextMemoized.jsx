import React, {memo} from 'react';
import UserForm from './UserForm';

const ChildNotUsingContextMemoized = () => {
  console.log('Did I render memozied');
  return (
    <span>Hola, I am memozied</span>
  )
};

export default memo(ChildNotUsingContextMemoized);