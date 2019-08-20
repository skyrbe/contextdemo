import React, { PureComponent } from 'react';

export default class ChildNotUsingContextMemoized extends PureComponent {
  render() {
    console.log('Did I render pure component');
    return (
      <span>Hola, I am a pure component</span>
    );
  }
}