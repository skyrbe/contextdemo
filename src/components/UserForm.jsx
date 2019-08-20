import React, { Component } from 'react';
import { UserConsumer } from '../context/userContext';

class UserForm extends Component {
  render() {
    return (
      <UserConsumer>
        {({state, handleChange}) => (
          <>
            <input type="text" name="name" value={state.name} onChange={(e) => {handleChange(e.target.name, e.target.value)}} />
            <input type="text" name="description" value={state.description}  onChange={(e) => {handleChange(e.target.name, e.target.value)}} />
          </>
        )}
      </UserConsumer>
    )
  }
}

export default UserForm;