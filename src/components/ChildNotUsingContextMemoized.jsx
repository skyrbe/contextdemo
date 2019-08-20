import React, {memo} from 'react';

const ChildNotUsingContextMemoized = () => {
  console.log('Did I render memozied');
  return (
    <span>Hola, I am memozied</span>
  )
};

export default memo(ChildNotUsingContextMemoized);