import React, {memo} from 'react';

const ChildNotUsingContextMemoized = () => {
  console.log('Memoized Component Rendered');
  return (
    <span>Hola, I am memozied</span>
  )
};

export default memo(ChildNotUsingContextMemoized);