import React, { Component } from 'react';
import Child from './components/Child';
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
      </UserProvider>
    );
  }
}

export default App;
