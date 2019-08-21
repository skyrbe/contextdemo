import React, { Component } from 'react';
import { UserContext } from '../context/userContext';

class UserFormContext extends Component {
  
  componentDidMount() {
    this.context.handleChange('name', 'John');
    this.context.handleChange('description', 'Doe');
  }
  
  handleChange = (e) => {
    this.context.handleChange(e.target.name, e.target.value);
  }

  render() {
    const { state } = this.context;
    return (
      <>
        <input type="text" name="name" value={state.name} onChange={this.handleChange} />
        <input type="text" name="description" value={state.description} onChange={this.handleChange} />
      </>
    )
  }
}

UserFormContext.contextType = UserContext;

export default UserFormContext;