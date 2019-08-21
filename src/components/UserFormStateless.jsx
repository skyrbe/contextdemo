import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';

const UserFormStateless = () => {
  const user = useContext(UserContext);
  const { state, handleChange } = user;

  const onChange = (e) => {
    handleChange(e.target.name, e.target.value);
  }

  return (
    <>
      <input type="text" name="name" value={state.name} onChange={onChange} />
      <input type="text" name="description" value={state.description} onChange={onChange} />
    </>
  )
}

export default UserFormStateless;