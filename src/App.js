import React, { Component } from 'react';
import Child from './components/Child';
import ChildNotUsingContext from './components/ChildNotUsingContext';
import ChildNotUsingContextMemoized from './components/ChildNotUsingContextMemoized';
import { UserProvider } from './context/userContext';
import './App.css';

class App extends Component {
  state = {
    id: 0,
    name: '',
    description: ''
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  }
  render() {
    return (
      <UserProvider value={{state: this.state, handleChange: this.handleChange}}>
        <Child />
        <ChildNotUsingContextMemoized />
        <ChildNotUsingContext />
      </UserProvider>
    );
  }
}

export default App;
