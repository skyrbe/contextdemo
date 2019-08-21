import React from 'react';
import UserFormRenderProp from './UserForm';
import UserFormStateless from './UserFormStateless';
import UserFormStateful from './UserFormStateful';

const Child = () => {
  return (
    <>
      <UserFormRenderProp /> Render Prop<br />
      <UserFormStateful /> Stateful<br />
      <UserFormStateless /> Stateless
    </>
  )
};

export default Child;